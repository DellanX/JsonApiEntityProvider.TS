import { Entity, EntityCollection, EntitySet } from '@dipscope/entity-store';
import { PropertyInfo } from '@dipscope/entity-store';
import { JsonApiEntityProvider } from './json-api-entity-provider';
import { JsonApiToManyRelationship } from './json-api-to-many-relationship';

/**
 * Json api to many relationship.
 * 
 * @type {JsonApiManyToManyRelationship<TEntity, TRelationship>}
 */
export class JsonApiManyToManyRelationship<TEntity extends Entity, TRelationship extends Entity, TPivot extends Entity> extends JsonApiToManyRelationship<TEntity, TRelationship>
{

    /**
     * Property info of relationship.
     * 
     * @type {JsonApiManyToManyRelationship<TEntity, TPivot>}
     */
    public readonly pivotRelationship: JsonApiToManyRelationship<TEntity, TPivot>;

    /**
     * Constructor.
     * 
     * @param {JsonApiEntityProvider} jsonApiEntityProvider Json api entity provider.
     * @param {EntitySet<TEntity>} entitySet Entity set.
     * @param {TEntity} entity Entity for which relationship is created.
     * @param {PropertyInfo<EntityCollection<TRelationship>>} propertyInfo Property info of relationship.
     */
    public constructor(
        jsonApiEntityProvider: JsonApiEntityProvider, 
        entitySet: EntitySet<TEntity>, 
        entity: TEntity,
        propertyInfo: PropertyInfo<EntityCollection<TRelationship>>,
        pivotPropertyInfo: PropertyInfo<EntityCollection<TPivot>>
    )
    {
        super(jsonApiEntityProvider, entitySet, entity, propertyInfo)
        this.pivotRelationship = new JsonApiToManyRelationship(jsonApiEntityProvider, entitySet, entity, pivotPropertyInfo)
        return;
    }
}
