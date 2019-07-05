import { MaterialRequirement } from '../types/types';
import { groupBy, prop } from 'ramda';

const combine = function(mat1: MaterialRequirement, mat2: MaterialRequirement): MaterialRequirement {
    return {
        materialId: mat1.materialId,
        quantityNeeded: mat1.quantityNeeded + mat2.quantityNeeded,
        quantityOwned: mat1.quantityOwned + mat2.quantityOwned
    };
};

export const combineMaterialRequirementLists = function(
    matReqList1: Array<MaterialRequirement>,
    matReqList2: Array<MaterialRequirement>
) {
    const matListsById = groupBy(prop('materialId'), [...matReqList1, ...matReqList2]);
    let combinedMatReqLists: Array<MaterialRequirement> = [];
    for (let materialId of Object.keys(matListsById)) {
        combinedMatReqLists.push(
            matListsById[materialId].reduce(combine)
        );
    }
    return combinedMatReqLists;
};