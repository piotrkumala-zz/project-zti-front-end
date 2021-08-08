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

import { ClientAnswer } from "../models/client-answer";

@Injectable({
  providedIn: "root",
})
export class AnswerControllerService extends BaseService {
  /**
   * Path part for operation saveAnswer
   */
  static readonly SaveAnswerPath = "/api/answer";
  /**
   * Path part for operation getSurveyAnswers
   */
  static readonly GetSurveyAnswersPath = "/api/answers/{id}";

  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveAnswer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAnswer$Response(params: {
    body: ClientAnswer;
  }): Observable<StrictHttpResponse<ClientAnswer>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      AnswerControllerService.SaveAnswerPath,
      "post"
    );
    if (params) {
      rb.body(params.body, "application/json");
    }

    return this.http
      .request(
        rb.build({
          responseType: "blob",
          accept: "*/*",
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<ClientAnswer>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveAnswer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAnswer(params: { body: ClientAnswer }): Observable<ClientAnswer> {
    return this.saveAnswer$Response(params).pipe(
      map((r: StrictHttpResponse<ClientAnswer>) => r.body as ClientAnswer)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSurveyAnswers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSurveyAnswers$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<{}>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      AnswerControllerService.GetSurveyAnswersPath,
      "get"
    );
    if (params) {
      rb.path("id", params.id, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: "blob",
          accept: "*/*",
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<{}>;
        })
      );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSurveyAnswers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSurveyAnswers(params: { id: string }): Observable<{}> {
    return this.getSurveyAnswers$Response(params).pipe(
      map((r: StrictHttpResponse<{}>) => r.body as {})
    );
  }
}
