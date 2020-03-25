/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * Enum class EnumClass.
 * @enum {String}
 * @readonly
 */
const EnumClass = {
  /**
   * value: "_abc"
   * @const
   */
  abc: "_abc",

  /**
   * value: "-efg"
   * @const
   */
  efg: "-efg",

  /**
   * value: "(xyz)"
   * @const
   */
  xyz: "(xyz)",

  /**
   * Returns a <code>EnumClass</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/EnumClass} The enum <code>EnumClass</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {EnumClass};
