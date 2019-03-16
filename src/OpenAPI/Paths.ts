import {PathItem} from "./PathItem";

/**
 * Holds the relative paths to the individual endpoints and their operations. The path is appended to the URL from the [`Server Object`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#serverObject) in order to construct the full URL. The Paths MAY be empty, due to [ACL constraints](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#securityFiltering).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#paths-object
 */
export interface PathsInterface {
    /**
     * A relative path to an individual endpoint. The field name MUST begin with a slash. The path is **appended** (no relative URL resolution) to the expanded URL from the [`Server Object`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#serverObject)'s `url` field in order to construct the full URL. [Path templating](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathTemplating) is allowed. When matching URLs, concrete (non-templated) paths would be matched before their templated counterparts. Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical. In case of ambiguous matching, it's up to the tooling to decide which one to use.
     */
    [_: string]: PathItem;
}
