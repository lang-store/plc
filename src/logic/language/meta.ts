import { CATEGORYS_OF_SEMANTIC_SYSTEMS, METHODS_OF_IMPLEMENTATION_SUPPORT } from '../../models/metadata';
import { MatrixItem } from '../../models/models';

export class MarkupMeta {

    get categorys(): MatrixItem[] {
        return CATEGORYS_OF_SEMANTIC_SYSTEMS;
    }

    get methods(): MatrixItem[] {
        return METHODS_OF_IMPLEMENTATION_SUPPORT;
    }

    getCategoryNameByCode = (code: string) => this.getName(code, this.categorys);

    getMethodNameByCode = (code: string) => this.getName(code, this.methods);

    private getName = (code: string, items: MatrixItem[]) => {
        const item = items.find(item => item.code === code);

        if (item) {
            return `${item.name} (${item.code})`;
        }
    }
}
