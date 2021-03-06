import {SerializableInterface} from "../../Serializer/Serializer";
import {SecurityScheme, SecuritySchemeInterface} from "./SecurityScheme";

export interface ApiKeySecuritySchemeInterface extends SecuritySchemeInterface {
    in: string;

    name: string;
}

/**
 * @inheritDoc
 */
export class ApiKeySecurityScheme extends SecurityScheme implements ApiKeySecuritySchemeInterface, SerializableInterface {

  constructor(properties: ApiKeySecuritySchemeInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * **REQUIRED**. The location of the API key. Valid values are `"query"`, `"header"` or `"cookie"`.
     */
    public in: string;

    /**
     * **REQUIRED**. The name of the header, query or cookie parameter to be used.
     */
    public name: string;

    /**
     * @inheritDoc
     */
    public readonly type: string = "apiKey";

    public serialize(): { [p: string]: any } {
        return this;
    }
}
