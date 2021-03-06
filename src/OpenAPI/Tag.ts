import {SerializableInterface} from "../Serializer/Serializer";
import {ExternalDocumentation} from "./ExternalDocumentation";

export interface TagInterface {
    description?: string;

    externalDocs?: ExternalDocumentation;

    name: string;
}

/**
 * Adds metadata to a single tag that is used by the [Operation Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#operationObject). It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#tag-object
 */
export class Tag implements TagInterface, SerializableInterface {
    constructor(properties: TagInterface) {
        Object.assign(this, properties);
    }

    /**
     * A short description for the tag. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * Additional external documentation for this tag.
     */
    public externalDocs?: ExternalDocumentation;

    /**
     * **REQUIRED**. The name of the tag.
     */
    public name: string;

    public serialize(): { [p: string]: any } {
        return this;
    }
}
