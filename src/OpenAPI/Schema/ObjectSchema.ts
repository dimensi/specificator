import {SerializableInterface} from "../../Serializer/Serializer";
import {Discriminator} from "../Discriminator";
import {Reference} from "../Reference";
import {Schema, SchemaInterface} from "./Schema";

export interface ObjectSchemaInterface extends SchemaInterface {
    additionalProperties?: boolean;

    discriminator?: Discriminator;

    maxProperties?: number;

    minProperties?: number;

    properties: { [propertyName: string]: Schema | Reference; };

    required?: string[];
}

/**
 * @inheritDoc
 */
export class ObjectSchema extends Schema implements ObjectSchemaInterface, SerializableInterface {

    constructor(properties: ObjectSchemaInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * Value can be boolean or object. Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) and not a standard JSON Schema. Consistent with JSON Schema, `additionalProperties` defaults to `true`.
     */
    public additionalProperties?: boolean = true;

    /**
     * Adds support for polymorphism. The discriminator is an object name that is used to differentiate between other schemas which may satisfy the payload description. See [Composition and Inheritance](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaComposition) for more details.
     */
    public discriminator?: Discriminator;

    public maxProperties?: number;

    public minProperties?: number;

    /**
     * Property definitions MUST be a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) and not a standard JSON Schema (inline or referenced).
     */
    public properties: { [propertyName: string]: Schema | Reference; };

    public required?: string[];

    /**
     * @inheritDoc
     */
    public readonly type: string = "object";

    public serialize(): { [p: string]: any } {
        return this;
    }
}
