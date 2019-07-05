import React from 'react';
import './App.css';
import { findActiveUpgrade } from '../models/upgrade';
import characters from '../data/characters';
import { MaterialRequirement } from '../types/types';
import { getActiveUpgrades } from '../models/character';
import { combineMaterialRequirementLists } from '../models/material-requirement';

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

const App: React.FC = () => {
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
                {character.upgradeGroups.map(upgrades => {
                  const activeUpgrade = findActiveUpgrade(upgrades);
                  return activeUpgrade
                    ? (
                      <li>
                        <p>
                          {activeUpgrade.equipmentBaseId}
                          {` -> `}
                          <strong>{activeUpgrade.equipmentTargetId}</strong>
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

export default App;
