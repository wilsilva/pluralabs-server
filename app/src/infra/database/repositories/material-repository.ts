import RepositoryApplication from './repository-application';
import Material from '../../../domain/entities/Material';

export default class MaterialRepository extends RepositoryApplication<Material> {
  constructor() {
    super('materials');
  }
}
