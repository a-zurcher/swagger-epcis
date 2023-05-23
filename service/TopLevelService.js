'use strict';


/**
 * Returns all sub-resources of a business location.
 * This endpoint returns all sub-resources of a business location (for HATEOAS discovery), which includes at least `events`. 
 *
 * bizLocation String A business location value.
 * perPage PerPage  (optional)
 * nextPageToken NextPageToken  (optional)
 * returns ResourceCollection
 **/
exports.bizLocationsBizLocationGET = function(bizLocation,perPage,nextPageToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "member" : [ "events", "events" ],
  "type" : "Collection",
  "@context" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns known business locations.
 * An endpoint to list all the business locations known to this repository. 
 *
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * perPage PerPage  (optional)
 * nextPageToken NextPageToken  (optional)
 * gS1EPCISMin GS1-EPCIS-Min The lowest EPCIS version supported.  (optional)
 * gS1EPCISMax GS1-EPCIS-Max The highest EPCIS version supported. (optional)
 * gS1CBVMin GS1-CBV-Min The lowest Core Business Vocabulary version supported.  (optional)
 * gS1CBVMax GS1-CBV-Max The highest Core Business Vocabulary version supported.  (optional)
 * gS1EPCFormat GS1-EPC-Format Header used by the client to indicate whether EPCs are expressed as GS1 Digital Link URIs or as EPC URNs. It is also used by the server to announce which EPC formats are supported. If absent the default value is `Always_GS1_Digital_Link`:  - No_Preference: No preference in the representation, i.e. any format is accepted.  - Always_GS1_Digital_Link: URIs are returned as GS1 Digital Link.  - Always_EPC_URN: URIs are returned as URN.  - Never_Translates: EPCs are never translated, i.e. the original format is kept.  (optional)
 * returns UriCollection
 **/
exports.bizLocationsGET = function(gS1Extensions,perPage,nextPageToken,gS1EPCISMin,gS1EPCISMax,gS1CBVMin,gS1CBVMax,gS1EPCFormat) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "member" : [ "http://example.com/aeiou", "http://example.com/aeiou" ],
  "type" : "Collection",
  "@context" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all sub-resources of a business step.
 * This endpoint returns all sub-resources of a business step (for HATEOAS discovery), which includes at least `events`. 
 *
 * bizStep String A business step value.
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * returns ResourceCollection
 **/
exports.bizStepsBizStepGET = function(bizStep,gS1Extensions) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "member" : [ "events", "events" ],
  "type" : "Collection",
  "@context" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns known business steps.
 * This endpoint returns the CBV standard business steps as well as any custom business steps supported by this repository.
 *
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * perPage PerPage  (optional)
 * nextPageToken NextPageToken  (optional)
 * gS1EPCISMin GS1-EPCIS-Min The lowest EPCIS version supported.  (optional)
 * gS1EPCISMax GS1-EPCIS-Max The highest EPCIS version supported. (optional)
 * gS1CBVMin GS1-CBV-Min The lowest Core Business Vocabulary version supported.  (optional)
 * gS1CBVMax GS1-CBV-Max The highest Core Business Vocabulary version supported.  (optional)
 * gS1CBVXMLFormat GS1-CBV-XML-Format When requesting XML content-type only, users can use this header to request receiving events with CBV values in either URN or Web URI format. This option is not available for JSON/JSON-LD. - No_Preference: The server chooses the representation. - Always_Web_URI: CBV values are returned as Web URI. - Always_URN: CBV values are returned as URNs. - Never_Translates: The original format is kept.  (optional)
 * returns BizStepCollection
 **/
exports.bizStepsGET = function(gS1Extensions,perPage,nextPageToken,gS1EPCISMin,gS1EPCISMax,gS1CBVMin,gS1CBVMax,gS1CBVXMLFormat) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "@context" : [ "https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld", {
    "ex" : "https://example.org/myCustomBizSteps/"
  } ],
  "type" : "Collection",
  "member" : [ "accepting", "arriving", "assembling", "collecting", "commissioning", "consigning", "creating_class_instance", "cycle_counting", "decommissioning", "departing", "destroying", "disassembling", "dispensing", "encoding", "entering_exiting", "holding", "inspecting", "installing", "killing", "loading", "other", "packing", "picking", "receiving", "removing", "repackaging", "repairing", "replacing", "reserving", "retail_selling", "sampling", "sensor_reporting", "shipping", "staging_outbound", "stock_taking", "stocking", "storing", "transporting", "unloading", "unpacking", "void_shipping", "ex:aCustomBizStep" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all sub-resources of a disposition.
 * This endpoint returns all sub-resources of a disposition (for HATEOAS discovery), which includes at least `events`. 
 *
 * disposition String A disposition value.
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * returns ResourceCollection
 **/
exports.dispositionsDispositionGET = function(disposition,gS1Extensions) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "member" : [ "events", "events" ],
  "type" : "Collection",
  "@context" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns known dispositions.
 * This endpoint returns the CBV standard dispositions as well as any custom dispositions supported by this repository. 
 *
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * perPage PerPage  (optional)
 * nextPageToken NextPageToken  (optional)
 * gS1EPCISMin GS1-EPCIS-Min The lowest EPCIS version supported.  (optional)
 * gS1EPCISMax GS1-EPCIS-Max The highest EPCIS version supported. (optional)
 * gS1CBVMin GS1-CBV-Min The lowest Core Business Vocabulary version supported.  (optional)
 * gS1CBVMax GS1-CBV-Max The highest Core Business Vocabulary version supported.  (optional)
 * gS1CBVXMLFormat GS1-CBV-XML-Format When requesting XML content-type only, users can use this header to request receiving events with CBV values in either URN or Web URI format. This option is not available for JSON/JSON-LD. - No_Preference: The server chooses the representation. - Always_Web_URI: CBV values are returned as Web URI. - Always_URN: CBV values are returned as URNs. - Never_Translates: The original format is kept.  (optional)
 * returns DispositionCollection
 **/
exports.dispositionsGET = function(gS1Extensions,perPage,nextPageToken,gS1EPCISMin,gS1EPCISMax,gS1CBVMin,gS1CBVMax,gS1CBVXMLFormat) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "@context" : [ "https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld", {
    "ex" : "https://example.org/myCustomDispositions/"
  } ],
  "type" : "Collection",
  "member" : [ "active", "available", "completeness_inferred", "completeness_verified", "conformant", "container_closed", "container_open", "damaged", "destroyed", "dispensed", "disposed", "encoded", "expired", "in_progress", "in_transit", "inactive", "mismatch_class", "mismatch_instance", "mismatch_quantity", "needs_replacement", "no_pedigree_match", "non_conformant", "non_sellable_other", "partially_dispensed", "recalled", "reserved", "retail_sold", "returned", "sellable_accessible", "sellable_not_accessible", "stolen", "unavailable", "unknown", "ex:aCustomDisposition" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all sub-resources of an electronic product code.
 * This endpoint returns all sub-resources of an electronic product code (for HATEOAS discovery), which includes at least `events`. 
 *
 * epc String An electronic product code value.
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * returns ResourceCollection
 **/
exports.epcsEpcGET = function(epc,gS1Extensions) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "member" : [ "events", "events" ],
  "type" : "Collection",
  "@context" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns known electronic product codes.
 * An endpoint to list all electronic product codes known to this repository.
 *
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * perPage PerPage  (optional)
 * nextPageToken NextPageToken  (optional)
 * gS1EPCISMin GS1-EPCIS-Min The lowest EPCIS version supported.  (optional)
 * gS1EPCISMax GS1-EPCIS-Max The highest EPCIS version supported. (optional)
 * gS1CBVMin GS1-CBV-Min The lowest Core Business Vocabulary version supported.  (optional)
 * gS1CBVMax GS1-CBV-Max The highest Core Business Vocabulary version supported.  (optional)
 * gS1EPCFormat GS1-EPC-Format Header used by the client to indicate whether EPCs are expressed as GS1 Digital Link URIs or as EPC URNs. It is also used by the server to announce which EPC formats are supported. If absent the default value is `Always_GS1_Digital_Link`:  - No_Preference: No preference in the representation, i.e. any format is accepted.  - Always_GS1_Digital_Link: URIs are returned as GS1 Digital Link.  - Always_EPC_URN: URIs are returned as URN.  - Never_Translates: EPCs are never translated, i.e. the original format is kept.  (optional)
 * returns UriCollection
 **/
exports.epcsGET = function(gS1Extensions,perPage,nextPageToken,gS1EPCISMin,gS1EPCISMax,gS1CBVMin,gS1CBVMax,gS1EPCFormat) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "member" : [ "http://example.com/aeiou", "http://example.com/aeiou" ],
  "type" : "Collection",
  "@context" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all sub-resources of an EPCIS event type.
 * This endpoint returns all sub-resources of an EPCIS event type (for HATEOAS discovery), which includes at least `events`. A server may add additional endpoints, for example `schema` to access the EPCIS event type schema. 
 *
 * eventType eventType Names of EPCIS event types. 
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * gS1EPCISMin GS1-EPCIS-Min The lowest EPCIS version supported.  (optional)
 * gS1EPCISMax GS1-EPCIS-Max The highest EPCIS version supported. (optional)
 * gS1CBVMin GS1-CBV-Min The lowest Core Business Vocabulary version supported.  (optional)
 * gS1CBVMax GS1-CBV-Max The highest Core Business Vocabulary version supported.  (optional)
 * returns ResourceCollection
 **/
exports.eventTypesEventTypeGET = function(eventType,gS1Extensions,gS1EPCISMin,gS1EPCISMax,gS1CBVMin,gS1CBVMax) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "member" : [ "events", "events" ],
  "type" : "Collection",
  "@context" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all EPCIS event types currently available in the EPCIS repository.
 * EPCIS event types specify the schema of an event. This endpoint returns the 5 standard event types as well as any custom event types supported by this repository.
 *
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * nextPageToken NextPageToken  (optional)
 * perPage PerPage  (optional)
 * gS1EPCISMin GS1-EPCIS-Min The lowest EPCIS version supported.  (optional)
 * gS1EPCISMax GS1-EPCIS-Max The highest EPCIS version supported. (optional)
 * gS1CBVMin GS1-CBV-Min The lowest Core Business Vocabulary version supported.  (optional)
 * gS1CBVMax GS1-CBV-Max The highest Core Business Vocabulary version supported.  (optional)
 * returns EventTypeCollection
 **/
exports.eventTypesGET = function(gS1Extensions,nextPageToken,perPage,gS1EPCISMin,gS1EPCISMax,gS1CBVMin,gS1CBVMax) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "@context" : [ "https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld", {
    "ex" : "https://example.org/myCustomEventTypes/"
  } ],
  "type" : "Collection",
  "member" : [ "AggregationEvent", "AssociationEvent", "ObjectEvent", "TransactionEvent", "TransformationEvent", "ex:aCustomEventType" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all EPCIS events available in the EPCIS repository.
 * This endpoint allows querying EPCIS events that are currently in the repository. Events can be filtered through URL query string parameters as specified by the EPCIS Query Language. An EPCIS 2.0 query body using the REST interface SHALL be serialised as a JSON object. The value of the query key within that JSON object SHALL validate against the schema defined at:  https://ref.gs1.org/standards/epcis/2.0.0/query-schema.json. An EPCIS 2.0 query may also be expressed via parameters in the URI query string.  The query parameters with fixed fieldnames are included in this OpenAPI interface.  However, this list is not exhaustive and the EPCIS 2.0 standard defines additional query parameters with flexible names, depending on the specific value of `uom`, `type` or `fieldname` that appears within the name of the parameter. 
 *
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * nextPageToken NextPageToken  (optional)
 * perPage PerPage  (optional)
 * gS1CBVMin GS1-CBV-Min The lowest Core Business Vocabulary version supported.  (optional)
 * gS1CBVMax GS1-CBV-Max The highest Core Business Vocabulary version supported.  (optional)
 * gS1EPCISMin GS1-EPCIS-Min The lowest EPCIS version supported.  (optional)
 * gS1EPCISMax GS1-EPCIS-Max The highest EPCIS version supported. (optional)
 * gS1EPCFormat GS1-EPC-Format Header used by the client to indicate whether EPCs are expressed as GS1 Digital Link URIs or as EPC URNs. It is also used by the server to announce which EPC formats are supported. If absent the default value is `Always_GS1_Digital_Link`:  - No_Preference: No preference in the representation, i.e. any format is accepted.  - Always_GS1_Digital_Link: URIs are returned as GS1 Digital Link.  - Always_EPC_URN: URIs are returned as URN.  - Never_Translates: EPCs are never translated, i.e. the original format is kept.  (optional)
 * gS1CBVXMLFormat GS1-CBV-XML-Format When requesting XML content-type only, users can use this header to request receiving events with CBV values in either URN or Web URI format. This option is not available for JSON/JSON-LD. - No_Preference: The server chooses the representation. - Always_Web_URI: CBV values are returned as Web URI. - Always_URN: CBV values are returned as URNs. - Never_Translates: The original format is kept.  (optional)
 * eventType List If specified, the result will only include events whose `type` matches one of the types specified in the parameter value. Each element of the parameter value may be one of the following strings: `ObjectEvent`, `AggregationEvent`, `TransactionEvent`, `TransformationEvent` or `AssociationEvent`. An element of the parameter value may also be the name of an extension event type. If omitted, all event types will be considered for inclusion in the result. (optional)
 * gE_eventTime Date If specified, only events with `eventTime` greater than or equal to the specified value will be included in the result. If omitted, events are included regardless of their `eventTime` (unless constrained by the `LT_eventTime` parameter). (optional)
 * lT_eventTime Date If specified, only events with `eventTime` less than the specified value will be included in the result. If omitted, events are included regardless of their `eventTime` (unless constrained by the `GE_eventTime` parameter). (optional)
 * gE_recordTime Date If provided, only events with `recordTime` greater than or equal to the specified value will be returned. The automatic limitation based on event record time (section 8.2.5.2) may implicitly provide a constraint similar to this parameter. If omitted, events are included regardless of their `recordTime`, other than automatic limitation based on event record time (optional)
 * lT_recordTime Date If provided, only events with `recordTime` less than the specified value will be returned. If omitted, events are included regardless of their `recordTime` (unless constrained by the `GE_recordTime` parameter or the automatic limitation based on event record time) (optional)
 * eQ_action List If specified, the result will only include events that (a) have an `action` field; and where (b) the value of the `action` field matches one of the specified values. The properties of the value of this parameter each must be one of the strings `ADD`, `OBSERVE`, or `DELETE`; if not, the implementation SHALL raise a `QueryParameterException`. If omitted, events are included regardless of their `action` field. (optional)
 * eQ_bizStep List If specified, the result will only include events that (a) have a non-null `bizStep` field; and where (b) the value of the `bizStep` field matches one of the specified values. - see <a href=\"https://ref.gs1.org/cbv/BizStep\" target=\"_blank\">CBV BizStep</a> for standard values.  Standard values should be expressed as bare words, e.g. `shipping`, whereas custom values should be expressed as URIs or CURIEs for which the namespace prefix is defined. If this parameter is omitted, events are returned regardless of the value of the `bizStep` field or whether the `bizStep` field exists at all. (optional)
 * eQ_disposition List If specified, the result will only include events that (a) have a non-null `disposition` field; and where (b) the value of the `disposition` field matches one of the specified values. - see <a href=\"https://ref.gs1.org/cbv/Disp\" target=\"_blank\">CBV Disposition</a> for standard values.  Standard values should be expressed as bare words, e.g. `in_transit`, whereas custom values should be expressed as URIs or CURIEs for which the namespace prefix is defined. If this parameter is omitted, events are returned regardless of the value of the `disposition` field or whether the `disposition` field exists at all. (optional)
 * eQ_persistentDisposition_set List If specified, the result will only include events that (a) have a non-null `persistentDisposition` field; and where (b) the value of the `set` field within the value of the `persistentDisposition` field matches one of the specified values. - see <a href=\"https://ref.gs1.org/cbv/Disp\" target=\"_blank\">CBV Disposition</a> for standard values.  Standard values should be expressed as bare words, e.g. `in_transit`, whereas custom values should be expressed as URIs or CURIEs for which the namespace prefix is defined. If this parameter is omitted, events are returned regardless of the value of the `set` field within `persistentDisposition` field or whether the `persistentDisposition` field exists at all. (optional)
 * eQ_persistentDisposition_unset List If specified, the result will only include events that (a) have a non-null `persistentDisposition` field; and where (b) the value of the `unset` field within the value of the `persistentDisposition` field matches one of the specified values. - see <a href=\"https://ref.gs1.org/cbv/Disp\" target=\"_blank\">CBV Disposition</a> for standard values.  Standard values should be expressed as bare words, e.g. `in_transit`, whereas custom values should be expressed as URIs or CURIEs for which the namespace prefix is defined. If this parameter is omitted, events are returned regardless of the value of the `unset` field within `persistentDisposition` field or whether the `persistentDisposition` field exists at all. (optional)
 * eQ_readPoint List If specified, the result will only include events that (a) have a non-null `readPoint` field; and where (b) the value of the `readPoint` field matches one of the specified URIs. If this parameter and `WD_readPoint` are both omitted, events are returned regardless of the value of the `readPoint` field or whether the `readPoint` field exists at all. (optional)
 * wD_readPoint List If specified, the result will only include events that (a) have a non-null `readPoint` field; and where (b) the value of the `readPoint` field matches one of the specified URIs, or is a direct or indirect descendant of one of the specified values. The meaning of 'direct or indirect descendant' is specified by master data, as described in section 6.5. (WD is an abbreviation for 'with descendants.') If this parameter and `EQ_readPoint` are both omitted, events are returned regardless of the value of the `readPoint` field or whether the `readPoint` field exists at all. (optional)
 * eQ_bizLocation List If specified, the result will only include events that (a) have a non-null `bizLocation` field; and where (b) the value of the `bizLocation` field matches one of the specified URIs. If this parameter and `WD_bizLocation` are both omitted, events are returned regardless of the value of the `bizLocation` field or whether the `bizLocation` field exists at all. (optional)
 * wD_bizLocation List If specified, the result will only include events that (a) have a non-null `bizLocation` field; and where (b) the value of the `bizLocation` field matches one of the specified URIs, or is a direct or indirect descendant of one of the specified values. The meaning of 'direct or indirect descendant' is specified by master data, as described in section 6.5. (WD is an abbreviation for 'with descendants.') If this parameter and `EQ_bizLocation` are both omitted, events are returned regardless of the value of the `bizLocation` field or whether the `bizLocation` field exists at all. (optional)
 * eQ_transformationID List If this parameter is specified, the result will only include events that (a) have a `transformationID` field (that is, `TransformationEvent`s or extension event type that extend `TransformationEvent`); and where (b) the `transformationID` field is equal to one of the values specified in this parameter. (optional)
 * mATCH_epc List If this parameter is specified, the result will only include events that (a) have an `epcList` or a `childEPCs` field (that is, `ObjectEvent`, `AggregationEvent`, `TransactionEvent`, `AssociationEvent` or extension event types that extend one of those event types); and where (b) one of the EPCs listed in the `epcList` or `childEPCs` field (depending on event type) matches one of the URIs specified in this parameter, where the meaning of 'matches' is as specified in section 8.2.7.1.1.  If this parameter is omitted, events are included regardless of their `epcList` or `childEPCs` field or whether the `epcList` or `childEPCs` field exists. (optional)
 * mATCH_parentID List If this parameter is specified, the result will only include events that (a) have a `parentID` field (that is, `AggregationEvent`, `TransactionEvent`, `AssociationEvent` or extension event types that extend one of those event types); and where (b) one of the EPCs listed in the `parentID` field matches one of the URIs specified in this parameter, where the meaning of 'matches' is as specified in section 8.2.7.1.1.  If this parameter is omitted, events are included regardless of their `parentID` field or whether the `parentID` field exists. (optional)
 * mATCH_inputEPC List If this parameter is specified, the result will only include events that (a) have an `inputEPCList` (that is, `TransformationEvent` or an extension event type that extends `TransformationEvent`); and where (b) one of the EPCs listed in the `inputEPCList` field matches one of the URIs specified in this parameter. The meaning of 'matches' is as specified in section 8.2.7.1.1. If this parameter is omitted, events are included regardless of their `inputEPCList` field or whether the `inputEPCList` field exists. (optional)
 * mATCH_outputEPC List If this parameter is specified, the result will only include events that (a) have an `outputEPCList` (that is, `TransformationEvent` or an extension event type that extends `TransformationEvent`); and where (b) one of the EPCs listed in the `outputEPCList` field matches one of the URIs specified in this parameter. The meaning of 'matches' is as specified in section 8.2.7.1.1. If this parameter is omitted, events are included regardless of their `outputEPCList` field or whether the `outputEPCList` field exists. (optional)
 * mATCH_anyEPC List If this parameter is specified, the result will only include events that (a) have an `epcList` field, a `childEPCs` field, a `parentID` field, an `inputEPCList` field, or an `outputEPCList` field (that is, `ObjectEvent`, `AggregationEvent`, `TransactionEvent`, `TransformationEvent`, `AssociationEvent` or extension event types that extend one of those event types); and where (b) the `parentID` field or one of the EPCs listed in the `epcList`, `childEPCs`, `inputEPCList`, or `outputEPCList` field (depending on event type) matches one of URIs specified in this parameter. The meaning of 'matches' is as specified in section 8.2.7.1.1. (optional)
 * mATCH_epcClass List If this parameter is specified, the result will only include events that (a) have a `quantityList` or a `childQuantityList` field (that is, `ObjectEvent`, `AggregationEvent`, `TransactionEvent`, `AssociationEvent` or extension event types that extend one of those event types); and where (b) one of the EPC classes listed in the `quantityList` or `childQuantityList` field (depending on event type) matches one of the EPC patterns or URIs specified in this parameter. The result will also include QuantityEvents whose `epcClass` field matches one of the URIs specified in this parameter. The meaning of 'matches' is as specified in section 8.2.7.1.1. (optional)
 * mATCH_inputEPCClass List If this parameter is specified, the result will only include events that (a) have an `inputQuantityList` field (that is, `TransformationEvent` or extension event types that extend it); and where (b) one of the EPC classes listed in the `inputQuantityList` field (depending on event type) matches one of the EPC patterns or URIs specified in this parameter. The meaning of 'matches' is as specified in section 8.2.7.1.1 (optional)
 * mATCH_outputEPCClass List If this parameter is specified, the result will only include events that (a) have an `outputQuantityList` field (that is, `TransformationEvent` or extension event types that extend it); and where (b) one of the EPC classes listed in the `outputQuantityList` field (depending on event type) matches one of the EPC patterns or URIs specified in this parameter. The meaning of 'matches' is as specified in section 8.2.7.1.1 (optional)
 * mATCH_anyEPCClass List If this parameter is specified, the result will only include events that (a) have a `quantityList`, `childQuantityList`, `inputQuantityList`, or `outputQuantityList` field (that is, `ObjectEvent`, `AggregationEvent`, `TransactionEvent`, `TransformationEvent`, `AssociationEvent` or extension event types that extend one of those event types); and where (b) one of the EPC classes listed in any of those fields matches one of the EPC patterns or URIs specified in this parameter. The result will also include `QuantityEvent`s whose `epcClass` field matches one of the URIs specified in this parameter. The meaning of 'matches' is as specified in section 8.2.7.1.1. (optional)
 * eQ_quantity BigDecimal (DEPCRECATED in EPCIS 1.1, REPURPOSED in EPCIS 2.0) If this parameter is specified, the result will only include events that (a) have a `quantity` field as part of a `QuantityElement`; and where (b) the `quantity` field is equal to the specified parameter. (optional)
 * gT_quantity BigDecimal (DEPCRECATED in EPCIS 1.1, REPURPOSED in EPCIS 2.0) If this parameter is specified, the result will only include events that (a) have a `quantity` field as part of a `QuantityElement`; and where (b) the `quantity` field is greater than the specified parameter. (optional)
 * gE_quantity BigDecimal (DEPCRECATED in EPCIS 1.1, REPURPOSED in EPCIS 2.0) If this parameter is specified, the result will only include events that (a) have a `quantity` field as part of a `QuantityElement`; and where (b) the `quantity` field is greater than or equal to the specified parameter. (optional)
 * lT_quantity BigDecimal (DEPCRECATED in EPCIS 1.1, REPURPOSED in EPCIS 2.0) If this parameter is specified, the result will only include events that (a) have a `quantity` field as part of a `QuantityElement`; and where (b) the `quantity` field is less than the specified parameter. (optional)
 * lE_quantity BigDecimal (DEPCRECATED in EPCIS 1.1, REPURPOSED in EPCIS 2.0) If this parameter is specified, the result will only include events that (a) have a `quantity` field as part of a `QuantityElement`; and where (b) the `quantity` field is less than or equal to the specified parameter. (optional)
 * eQ_eventID List If this parameter is specified, the result will only include events that (a) have a non-null `eventID` field; and where (b) the `eventID` field is equal to one of the values specified in this parameter. If this parameter is omitted, events are returned regardless of the value of the `eventID` field or whether the `eventID` field exists at all. (optional)
 * eXISTS_errorDeclaration Boolean If this parameter is specified (and has a value of true), the result will only include events that contain an `ErrorDeclaration`. If this parameter is omitted (or has a value of false), events are returned regardless of whether they contain an `ErrorDeclaration`. (optional)
 * gE_errorDeclarationTime Date If this parameter is specified, the result will only include events that (a) contain an `ErrorDeclaration`; and where (b) the value of the `errorDeclarationTime` field is greater than or equal to the specified value. If this parameter is omitted, events are returned regardless of whether they contain an `ErrorDeclaration` or what the value of the `errorDeclarationTime` field is. (optional)
 * lT_errorDeclarationTime Date If this parameter is specified, the result will only include events that (a) contain an `ErrorDeclaration`; and where (b) the value of the `errorDeclarationTime` field is less than to the specified value. If this parameter is omitted, events are returned regardless of whether they contain an `ErrorDeclaration` or what the value of the `errorDeclarationTime` field is. (optional)
 * eQ_errorReason List If this parameter is specified, the result will only include events that (a) contain an `ErrorDeclaration`; and where (b) the error declaration contains a non-null `reason` field; and where (c) the `reason` field is equal to one of the values specified in this parameter. If this parameter is omitted, events are returned regardless of whether they contain an `ErrorDeclaration` or what the value of the `reason` field is. (optional)
 * eQ_correctiveEventID List If this parameter is specified, the result will only include events that (a) contain an `ErrorDeclaration`; and where (b) one of the elements of the `correctiveEventIDs` list is equal to one of the values specified in this parameter. If this parameter is omitted, events are returned regardless of whether they contain an `ErrorDeclaration` or the contents of the `correctiveEventIDs` list. (optional)
 * orderBy String If specified, names a single field that will be used to order the results. The `orderDirection` field specifies whether the ordering is in ascending sequence or descending sequence. Events included in the result that lack the specified field altogether may occur in any position within the result event list. The value of this parameter SHALL be one of: `eventTime`, `recordTime`, or the fully qualified name of an extension field whose type is Int, Float, Time, or String. A fully qualified fieldname is constructed as for the `EQ_fieldname` parameter. In the case of a field of type String, sorting SHALL be according to their case-sensitive lexical ordering, considering UTF-8/ASCII code values of each successive character. If omitted, no order is specified. The implementation MAY order the results in any order it chooses, and that order MAY differ even when the same query is executed twice on the same data. (In EPCIS 1.0, the value `quantity` was also permitted, but its use is deprecated in EPCIS 1.1.) (optional)
 * orderDirection String If specified and `orderBy` is also specified, specifies whether the results are ordered in ascending or descending sequence according to the key specified by `orderBy`. The value of this parameter must be one of `ASC` (for ascending order) or `DESC` (for descending order); if not, the implementation SHALL raise a `QueryParameterException`. If omitted, defaults to `DESC`. (optional)
 * eventCountLimit Integer If specified, the results will only include the first N events that match the other criteria, where N is the value of this parameter. The ordering specified by the `orderBy` and `orderDirection` parameters determine the meaning of “first” for this purpose. If omitted, all events matching the specified criteria will be included in the results. This parameter and `maxEventCount` are mutually exclusive; if both are specified, a `QueryParameterException` SHALL be raised. This parameter may only be used when `orderBy` is specified; if `orderBy` is omitted and `eventCountLimit` is specified, a `QueryParameterException` SHALL be raised. This parameter differs from `maxEventCount` in that this parameter limits the amount of data returned, whereas `maxEventCount` causes an exception to be thrown if the limit is exceeded. Explanation (non-normative): A common use of the `orderBy`, `orderDirection`, and `eventCountLimit` parameters is for extremal queries. For example, to select the most recent event matching some criteria, the query would include parameters that select events matching the desired criteria, and set `orderBy` to `eventTime`, `orderDirection` to `DESC`, and `eventCountLimit` to 1. (optional)
 * maxEventCount Integer If specified, at most this many events will be included in the query result. If the query would otherwise return more than this number of events, a `QueryTooLargeException` SHALL be raised instead of a normal query result. This parameter and `eventCountLimit` are mutually exclusive; if both are specified, a `QueryParameterException` SHALL be raised. If this parameter is omitted, any number of events may be included in the query result. Note, however, that the EPCIS implementation is free to raise a `QueryTooLargeException` regardless of the setting of this parameter (see section 8.2.3). (optional)
 * gE_startTime Date If specified, only events with `startTime` greater than or equal to the specified value will be included in the result. If omitted, events are included regardless of their `startTime` (unless constrained by the `LT_startTime` parameter). (optional)
 * lT_startTime Date If specified, only events with `startTime` less than the specified value will be included in the result. If omitted, events are included regardless of their `startTime` (unless constrained by the `GE_startTime` parameter). (optional)
 * gE_endTime Date If specified, only events with `endTime` greater than or equal to the specified value will be included in the result. If omitted, events are included regardless of their `endTime` (unless constrained by the `LT_endTime` parameter). (optional)
 * lT_endTime Date If specified, only events with `endTime` less than the specified value will be included in the result. If omitted, events are included regardless of their `endTime` (unless constrained by the `GE_endTime` parameter). (optional)
 * eQ_type List If this parameter is specified, the result will only include events that (a) accommodate one or more `sensorElement` fields; and where (b) the `type` attribute in one of these `sensorElement` fields is equal to one of the values specified in this parameter. If this parameter is omitted, events are returned regardless of the value of the `type` attribute or whether a `sensorElement` field exists at all. Standard values for `type` are defined at <a href=\"https://gs1.org/voc/MeasurementType\" target=\"_blank\">https://gs1.org/voc/MeasurementType</a>.  Standard values SHALL be expressed as bare words, e.g. `Temperature`. (optional)
 * eQ_deviceID List If this parameter is specified, the result will only include events that (a) accommodate a `deviceID` attribute; and where (b) the `deviceID` attribute is equal to one of the URIs specified in this parameter. If this parameter is omitted, events are returned regardless of the value of the `deviceID` attribute or whether the `deviceID` attribute exists at all. (optional)
 * eQ_dataProcessingMethod List If this parameter is specified, the result will only include events that (a) accommodate a `dataProcessingMethod` attribute; and where (b) the `dataProcessingMethod` attribute is equal to one of the URIs specified in this parameter. If this parameter is omitted, events are returned regardless of the value of the `dataProcessingMethod` attribute or whether the `dataProcessingMethod` attribute exists at all. (optional)
 * eQ_microorganism List If this parameter is specified, the result will only include events that (a) accommodate a `microorganism` attribute; and where (b) the `microorganism` attribute is equal to one of the URIs specified in this parameter. If this parameter is omitted, events are returned regardless of the value of the `microorganism` attribute or whether the `microorganism` attribute exists at all. (optional)
 * eQ_chemicalSubstance List If this parameter is specified, the result will only include events that (a) accommodate a `chemicalSubstance` attribute; and where (b) the `chemicalSubstance` attribute is equal to one of the URIs specified in this parameter. If this parameter is omitted, events are returned regardless of the value of the `chemicalSubstance` attribute or whether the `chemicalSubstance` attribute exists at all. (optional)
 * eQ_bizRules List If this parameter is specified, the result will only include events that (a) accommodate a `bizRules` attribute; and where (b) the `bizRules` attribute is equal to one of the URIs specified in this parameter. If this parameter is omitted, events are returned regardless of the value of the `bizRules` attribute or whether the `bizRules` attribute exists at all. (optional)
 * eQ_stringValue List If this parameter is specified, the result will only include events that (a) accommodate a `stringValue` attribute; and where (b) the `stringValue` attribute is equal to one of the strings specified in this parameter. If this parameter is omitted, events are returned regardless of the value of the `stringValue` attribute or whether the `stringValue` attribute exists at all. (optional)
 * eQ_hexBinaryValue List If this parameter is specified, the result will only include events that (a) accommodate a `hexBinaryValue` attribute; and where (b) the `hexBinaryValue` attribute is equal to one of the strings specified in this parameter. If this parameter is omitted, events are returned regardless of the value of the `hexBinaryValue` attribute or whether the `hexBinaryValue` attribute exists at all. (optional)
 * eQ_uriValue List If this parameter is specified, the result will only include events that (a) accommodate a `uriValue` attribute; and where (b) the `uriValue` attribute is equal to one of the strings specified in this parameter. If this parameter is omitted, events are returned regardless of the value of the `uriValue` attribute or whether the `uriValue` attribute exists at all. (optional)
 * eQ_booleanValue Boolean If this parameter is specified, the result will only include events that (a) accommodate a `booleanValue` attribute; and where (b) the `booleanValue` attribute is equal to the specified value (i.e. `true` or `false`). If this parameter is omitted, events are returned regardless of the value of the `booleanValue` attribute or whether the `booleanValue` attribute exists at all (optional)
 * returns epcisQueryDocument
 **/
exports.eventsGET = function(gS1Extensions,nextPageToken,perPage,gS1CBVMin,gS1CBVMax,gS1EPCISMin,gS1EPCISMax,gS1EPCFormat,gS1CBVXMLFormat,eventType,gE_eventTime,lT_eventTime,gE_recordTime,lT_recordTime,eQ_action,eQ_bizStep,eQ_disposition,eQ_persistentDisposition_set,eQ_persistentDisposition_unset,eQ_readPoint,wD_readPoint,eQ_bizLocation,wD_bizLocation,eQ_transformationID,mATCH_epc,mATCH_parentID,mATCH_inputEPC,mATCH_outputEPC,mATCH_anyEPC,mATCH_epcClass,mATCH_inputEPCClass,mATCH_outputEPCClass,mATCH_anyEPCClass,eQ_quantity,gT_quantity,gE_quantity,lT_quantity,lE_quantity,eQ_eventID,eXISTS_errorDeclaration,gE_errorDeclarationTime,lT_errorDeclarationTime,eQ_errorReason,eQ_correctiveEventID,orderBy,orderDirection,eventCountLimit,maxEventCount,gE_startTime,lT_startTime,gE_endTime,lT_endTime,eQ_type,eQ_deviceID,eQ_dataProcessingMethod,eQ_microorganism,eQ_chemicalSubstance,eQ_bizRules,eQ_stringValue,eQ_hexBinaryValue,eQ_uriValue,eQ_booleanValue) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "schemaVersion" : "schemaVersion",
  "epcisBody" : {
    "queryResults" : {
      "resultsBody" : {
        "eventList" : [ "", "" ],
        "vocabularyList" : [ {
          "vocabularyElementList" : [ {
            "children" : [ null, null ],
            "attributes" : [ {
              "attribute" : ""
            }, {
              "attribute" : ""
            } ]
          }, {
            "children" : [ null, null ],
            "attributes" : [ {
              "attribute" : ""
            }, {
              "attribute" : ""
            } ]
          } ],
          "type" : "http://example.com/aeiou"
        }, {
          "vocabularyElementList" : [ {
            "children" : [ null, null ],
            "attributes" : [ {
              "attribute" : ""
            }, {
              "attribute" : ""
            } ]
          }, {
            "children" : [ null, null ],
            "attributes" : [ {
              "attribute" : ""
            }, {
              "attribute" : ""
            } ]
          } ],
          "type" : "http://example.com/aeiou"
        } ]
      },
      "queryName" : "queryName",
      "subscriptionID" : "subscriptionID"
    }
  },
  "id" : "http://example.com/aeiou",
  "type" : "EPCISQueryDocument",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "@context" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns known read points.
 * An endpoint to list all read points known to this repository.
 *
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * perPage PerPage  (optional)
 * nextPageToken NextPageToken  (optional)
 * gS1EPCISMin GS1-EPCIS-Min The lowest EPCIS version supported.  (optional)
 * gS1EPCISMax GS1-EPCIS-Max The highest EPCIS version supported. (optional)
 * gS1CBVMin GS1-CBV-Min The lowest Core Business Vocabulary version supported.  (optional)
 * gS1CBVMax GS1-CBV-Max The highest Core Business Vocabulary version supported.  (optional)
 * gS1EPCFormat GS1-EPC-Format Header used by the client to indicate whether EPCs are expressed as GS1 Digital Link URIs or as EPC URNs. It is also used by the server to announce which EPC formats are supported. If absent the default value is `Always_GS1_Digital_Link`:  - No_Preference: No preference in the representation, i.e. any format is accepted.  - Always_GS1_Digital_Link: URIs are returned as GS1 Digital Link.  - Always_EPC_URN: URIs are returned as URN.  - Never_Translates: EPCs are never translated, i.e. the original format is kept.  (optional)
 * returns UriCollection
 **/
exports.readPointsGET = function(gS1Extensions,perPage,nextPageToken,gS1EPCISMin,gS1EPCISMax,gS1CBVMin,gS1CBVMax,gS1EPCFormat) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "member" : [ "http://example.com/aeiou", "http://example.com/aeiou" ],
  "type" : "Collection",
  "@context" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all sub-resources of a read point.
 * This endpoint returns all sub-resources of a read point (for HATEOAS discovery), which includes at least `events`. 
 *
 * readPoint String A read point value.
 * perPage PerPage  (optional)
 * nextPageToken NextPageToken  (optional)
 * returns ResourceCollection
 **/
exports.readPointsReadPointGET = function(readPoint,perPage,nextPageToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "member" : [ "events", "events" ],
  "type" : "Collection",
  "@context" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

