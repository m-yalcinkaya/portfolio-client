import { contentChild, Injectable } from '@angular/core';
import { HttpClientService } from '../http-client-service';
import { firstValueFrom, Observable } from 'rxjs';
import { List_Blog } from '../../../contracts/list_blog';
import { HttpErrorResponse } from '@angular/common/http';
import { Create_Blog } from '../../../contracts/list_create';

@Injectable({
  providedIn: 'root',
})
export class Blog {
  constructor(private httpClient: HttpClientService) {
    this.httpClient
      .get({
        controller: 'blogs',
      })
      .subscribe((met) => console.log(met));
  }

  async read(
    page: number = 0,
    size: number = 5,
    successCallBack?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ): Promise<{ totalCount: number; blogs: List_Blog[] }> {
    const promiseData: Promise<{
      totalCount: number;
      blogs: List_Blog[];
    }> = this.httpClient
      .get<{ totalCount: number; blogs: List_Blog[] }>({
        controller: 'blogs',
        queryString: `page=${page}&size=${size}`,
      })
      .toPromise();

    promiseData
      .then((d) => successCallBack())
      .catch((errorResponse: HttpErrorResponse) =>
        errorCallBack(errorResponse.message)
      );

    return await promiseData;
  }

  create(blog: Create_Blog, successCallBack?: any, errorCallBack?: any) {
    this.httpClient
      .post(
        {
          controller: 'blogs',
        },
        {
          title: blog.title,
          content: blog.content,
          thumbnailUrl: blog.thumbnailUrl,
          tags: blog.tags,
          isPublished: blog.isPublished,
        }
      )
      .subscribe(
        (result) => {
          successCallBack();
        },
        (errorResponse: HttpErrorResponse) => {
          const _error: Array<{ key: string; value: Array<string> }> =
            errorResponse.error;
          let message = '';
          _error.forEach((v, index) => {
            v.value.forEach((_v, _index) => {
              message += `${_v}<br>`;
            });
          });
          errorCallBack(message);
        }
      );
  }
}
