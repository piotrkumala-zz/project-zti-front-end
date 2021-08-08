/* tslint:disable */
/* eslint-disable */
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { BaseService } from "../base-service";
import { ApiConfiguration } from "../api-configuration";
import { StrictHttpResponse } from "../strict-http-response";
import { RequestBuilder } from "../request-builder";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

import { ClientSurvey } from "../models/client-survey";

@Injectable({
  providedIn: "root",
})
export class SurveyControllerService extends BaseService {
  /**
   * Path part for operation getSurveys
   */
  static readonly GetSurveysPath = "/api/survey";
  /**
   * Path part for operation saveSurvey
   */
  static readonly SaveSurveyPath = "/api/survey";
  /**
   * Path part for operation getSurvey
   */
  static readonly GetSurveyPath = "/api/survey/{id}";

  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSurveys()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSurveys$Response(params?: {}): Observable<
    StrictHttpResponse<ClientSurvey[]>
  > {
    const rb = new RequestBuilder(
      this.rootUrl,
      SurveyControllerService.GetSurveysPath,
      "get"
    );
    if (params) {
    }

    return this.http
      .request(
        rb.build({
          responseType: "json",
          accept: "*/*",
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<ClientSurvey[]>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSurveys$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSurveys(params?: {}): Observable<{}> {
    return this.getSurveys$Response(params).pipe(
      map((r: StrictHttpResponse<{}>) => r.body as {})
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveSurvey()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSurvey$Response(params: {
    body: ClientSurvey;
  }): Observable<StrictHttpResponse<ClientSurvey>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      SurveyControllerService.SaveSurveyPath,
      "post"
    );
    if (params) {
      rb.body(params.body, "application/json");
    }

    return this.http
      .request(
        rb.build({
          responseType: "json",
          accept: "*/*",
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<ClientSurvey>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveSurvey$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSurvey(params: { body: ClientSurvey }): Observable<ClientSurvey> {
    return this.saveSurvey$Response(params).pipe(
      map((r: StrictHttpResponse<ClientSurvey>) => r.body as ClientSurvey)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSurvey()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSurvey$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ClientSurvey>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      SurveyControllerService.GetSurveyPath,
      "get"
    );
    if (params) {
      rb.path("id", params.id, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: "json",
          accept: "*/*",
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<ClientSurvey>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSurvey$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSurvey(params: { id: string }): Observable<ClientSurvey> {
    return this.getSurvey$Response(params).pipe(
      map((r: StrictHttpResponse<ClientSurvey>) => r.body as ClientSurvey)
    );
  }
}
