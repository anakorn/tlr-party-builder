import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { findActiveUpgrade } from '../models/upgrade';
import { MaterialRequirement, Character } from '../types/types';
import { getActiveUpgrades } from '../models/character';
import { combineMaterialRequirementLists } from '../models/material-requirement';
import { AppState } from '../store';
import { completeUpgrade } from '../store/actions';

const MaterialRequirementDisplay: React.FC<{ material: MaterialRequirement }> = ({
  material
}) => {
  return (
    <p>
      {material.materialId} <span style={{ 'color': material.quantityOwned < material.quantityNeeded ? 'red' : undefined }}>{material.quantityOwned}</span> / {material.quantityNeeded}
    </p>
  )
};

const MaterialRequirementListDisplay: React.FC<{ materials: Array<MaterialRequirement> }> = ({
  materials
}) => {
  return (
    <ul>
      {materials.map(material => (
        <li>
          <MaterialRequirementDisplay material={material} />
        </li>
      ))}
    </ul>
  )
};

interface AppProps {
  characters: Array<Character>,
  completeUpgrade: typeof completeUpgrade
}

const App: React.FC<AppProps> = ({
  characters,
  completeUpgrade
}) => {
  return (
    <div>
      <h1>All Materials Needed</h1>
      <MaterialRequirementListDisplay
        materials={characters
          .map(getActiveUpgrades)
          .reduce(combineMaterialRequirementLists)
          .filter(m => m.quantityOwned < m.quantityNeeded)
        }
      />
      <h1>All Characters</h1>
      <ul>
        {characters.map(character => (
          <li>
            <p>ID: {character.id}</p>
            <p>
              Active Upgrades:
            <ul>
                {character.upgradeGroups.map((upgrades, i) => {
                  const activeUpgrade = findActiveUpgrade(upgrades);
                  return activeUpgrade
                    ? (
                      <li>
                        <p>
                          {activeUpgrade.equipmentBaseId}
                          {` -> `}
                          <strong>{activeUpgrade.equipmentTargetId}</strong>
                          <button onClick={() => completeUpgrade(character.id, i)}>complete</button>
                        </p>
                        <ul>
                          {activeUpgrade.materialRequirements.map(material => (
                            <li>
                              <MaterialRequirementDisplay material={material} />
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                    : null;
                })}
              </ul>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  characters: state.characters.characters
});

export default connect(
  mapStateToProps,
  { completeUpgrade }
)(App);