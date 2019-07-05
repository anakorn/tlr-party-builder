import { MaterialRequirement } from '../types/types';
import { combineMaterialRequirementLists } from './material-requirement';

describe('combineMaterialRequirementLists', () => {
    it('should work as expected', () => {
        const matReqList1: Array<MaterialRequirement> = [
            {
                materialId: 'foo',
                quantityNeeded: 100,
                quantityOwned: 1
            },
            {
                materialId: 'bar',
                quantityNeeded: 5,
                quantityOwned: 0
            }
        ];
        const matReqList2: Array<MaterialRequirement> = [
            {
                materialId: 'foo',
                quantityNeeded: 100,
                quantityOwned: 2
            },
            {
                materialId: 'bar',
                quantityNeeded: 10,
                quantityOwned: 5
            }
        ];
        expect(combineMaterialRequirementLists(matReqList1, matReqList2)).toEqual([
            {
                materialId: 'foo',
                quantityNeeded: 200,
                quantityOwned: 3
            },
            {
                materialId: 'bar',
                quantityNeeded: 15,
                quantityOwned: 5
            }
        ]);
    });
});