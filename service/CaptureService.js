'use strict';


/**
 * Returns information about the capture job.
 * When EPCIS events are added through the capture interface, the capture process can run asynchronously. If the payload is syntactically correct and the client is allowed to call `/capture`, the server returns a `202` HTTP response code. This endpoint exposes the state of the capture job to the client. 
 *
 * captureID String A unique value identifying a capture job generated by the server.
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * gS1EPCISMin GS1-EPCIS-Min The lowest EPCIS version supported.  (optional)
 * gS1EPCISMax GS1-EPCIS-Max The highest EPCIS version supported. (optional)
 * returns CaptureJob
 **/
exports.captureCaptureIDGET = function(captureID,gS1Extensions,gS1EPCISMin,gS1EPCISMax) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "captureID" : "id9261379075",
  "createdAt" : "2022-01-21T17:32:28Z",
  "finishedAt" : "2022-01-21T17:45:28Z",
  "running" : false,
  "success" : true,
  "captureErrorBehaviour" : "rollback",
  "errors" : [ ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of capture jobs.
 * When EPCIS events are added through the capture interface, the capture process can run asynchronously. If the payload is syntactically correct and the client is allowed to call `/capture`, the server returns a `202` HTTP response code. This endpoint returns all capture jobs that were created and supports pagination. 
 *
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * nextPageToken NextPageToken  (optional)
 * perPage PerPage  (optional)
 * gS1EPCISMin GS1-EPCIS-Min The lowest EPCIS version supported.  (optional)
 * gS1EPCISMax GS1-EPCIS-Max The highest EPCIS version supported. (optional)
 * returns List
 **/
exports.captureGET = function(gS1Extensions,nextPageToken,perPage,gS1EPCISMin,gS1EPCISMax) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "captureID" : "id9261379075",
  "createdAt" : "2022-01-21T17:32:28Z",
  "finishedAt" : "2022-01-21T17:45:28Z",
  "running" : false,
  "success" : true,
  "captureErrorBehaviour" : "rollback",
  "errors" : [ ]
}, {
  "captureID" : "id9261379075",
  "createdAt" : "2022-01-21T17:32:28Z",
  "finishedAt" : "2022-01-21T17:45:28Z",
  "running" : false,
  "success" : true,
  "captureErrorBehaviour" : "rollback",
  "errors" : [ ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Asynchronous capture endpoint for one or more EPCIS events.
 * EPCIS events are added in bulk using the capture interface. Four design considerations were made to remain compatible with EPCIS 1.2: - EPCIS 2.0 keeps event IDs optional. If event IDs are missing, the server should populate the event ID with a unique value. Otherwise, it won't be possible to retrieve these events by eventID. - By default, EPCIS events are only stored if the entire capture job was successful. This behaviour can be changed with the `GS1-Capture-Error-Behaviour` header. - EPCIS master data can be captured in the header (`epcisHeader`) of an `EPCISDocument`. - This endpoint should support both `EPCISDocument` and `EPCISQueryDocument` as input. To prevent timeouts for large payloads, the client potentially may need to split the payload into several capture calls. To that end, the server can specify a capture limit (number of EPCIS events) and file size limit (payload size). A successful capturing of events does not guarantee that events will be stored. Instead, the server returns a capture id, which the client can use to obtain information about the capture job. 
 *
 * body Capture_body 
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * gS1EPCISVersion GS1-EPCIS-Version The EPCIS version.  (optional)
 * gS1CBVVersion GS1-CBV-Version The Core Business Vocabulary version.  (optional)
 * gS1CaptureErrorBehaviour GS1-Capture-Error-Behaviour A header to control how the capture interface will behave in case of an error: - `rollback`: \"All or nothing\". Either the capture job is entirely successful or all EPCIS events are rejected. - `proceed`: \"Greedy capture\". The capture interface tries to capture as many EPCIS events as possible, even if there are errors. The default behaviour is `rollback`, as in EPCIS 1.2.  (optional)
 * no response value expected for this operation
 **/
exports.capturePOST = function(body,gS1Extensions,gS1EPCISVersion,gS1CBVVersion,gS1CaptureErrorBehaviour) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Synchronous capture interface for a single EPCIS event.
 * An individual EPCIS event can be created by making a `POST` request on the `/events` resource. Alternatively, the client can also use the `/capture` interface and capture a single event. 
 *
 * body EPCISEvent A single EPCIS event.
 * gS1Extensions GS1-Extensions Specific EPCIS or CBV extensions supported (e.g., for FIT).  (optional)
 * gS1EPCISVersion GS1-EPCIS-Version The EPCIS version.  (optional)
 * gS1CBVVersion GS1-CBV-Version The Core Business Vocabulary version.  (optional)
 * returns EPCISEvent
 **/
exports.eventsPOST = function(body,gS1Extensions,gS1EPCISVersion,gS1CBVVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

