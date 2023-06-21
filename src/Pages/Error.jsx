import React from "react";
import { RxHeartFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <section className="bg-[#f3faf6] dark:bg-slate-900 w-full pt-20">
        <div className="grid-layout-1">
          <div className="flex-center-center flex-col px-4 md:px-10 py-10 min-h-screen">
            <Link to={'/'}>
            <div className=" lg:mb-10">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpEQzVEOUVBRjk1RTFFQzExOUIxQURGOUM1RjREN0YyNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCQjg5NzM0QkUxOTUxMUVDQTE0Q0U4RTBFRUJBMzcwQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCQjg5NzM0QUUxOTUxMUVDQTE0Q0U4RTBFRUJBMzcwQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDVEOUVBRjk1RTFFQzExOUIxQURGOUM1RjREN0YyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQzVEOUVBRjk1RTFFQzExOUIxQURGOUM1RjREN0YyNiIvPiA8L3JkZjpEZXNjcmlwdGlv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"
                alt="logo"
                />
            </div>
            </Link>

            <div className="flex-center-center flex-col my-auto mb-16">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVGMDMyRTIxNjNFNjExRUM5MEU0QUNCMjRERTMzOTdFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVGMDMyRTIyNjNFNjExRUM5MEU0QUNCMjRERTMzOTdFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUYwMzJFMUY2M0U2MTFFQzkwRTRBQ0IyNERFMzM5N0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUYwMzJFMjA2M0U2MTFFQzkwRTRBQ0IyNERFMzM5N0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6jfcRxAAAC91BMVEUWHC39/f38/P36+/v39/ilqK6xs7nQ0tWho6q2uL3z8/Tg4ePw8fK7vcKipKvd3uGSlZ3Bwsf5+fnr6+2srrSVmJ/e3+GusLbZ2tzs7O7o6eqpq7L19fb7+/z09PWYmqKjpaymqa/4+PjAwsaeoaiWmaCztburrbOkpq329ve0trufoqmXmqHp6uvW19ry8/PGyMzS09e+wMXv7/DJys7Fx8uZm6Pu7u/x8vOoqrGQkpuwsrfq6+y6vMH6+vqQk5vX2Nu3ub7h4uStr7W/wcWTlp69v8THyc3t7e+bnqW8vsOgoqm6u8C4ur/l5uivsbfn6OqNkJilp62anaTIys5/gozY2dza296nqrCwsrjDxMmcn6bm5+mdoKeRlJzNztLCw8iUl5+KjZaJjJXb3N/l5eff4OKqrLKytLrk5ObP0dTa293i4+XOz9PMzdGPkpp+gYuanKTP0NO1t7y5usDv8PEZHy8XHS7U1dh3eoTKy8+Eh5CBhI1UWWV7f4iAg41tcXuFiZGFiJFwdH+Mj5eOkZnV1tmIi5TExclydoDc3eB1eYODho9laXXj4+WHipPFxsqGiZKLjpaChY5manVzd4EbIDE1OkkaIDAYHi/LzNDR0tZ9gYo8QVB2eYNgZHBfY298gIlvcn1scHp4e4V6fYcbITJna3ZCR1VNUV4hJzdkaHNxdX9QVWJITVo7QE9ucXwcIjNFSVdobHc9QlBYXGhrb3pXW2ceJDQ6P01LUF0lKjphZXFpbXgzOEd5fIZ0eIIuM0InLT1wc35bYGwmKzvT1NciKDhdYW1PU2BGSlhWWmcpLz5DSFVMUV4sMUEmLDxaXmofJTUqMD85PkxcYWxeYm5ESVZQVGF7fohOUl8oLj1JTls7QE5iZnFVWWY2O0pBRlRbX2tqbnk4PUs/RFItMkIgJjZKT1w+Q1FARVMdIzRjZ3JGS1lSV2MjKDkrMEBHTFkkKTlRVmNZXWkxN0ZlaXQ0OUhTWGQ3PEsyOEcvNEP///91/sJ4AAAA/XRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A9k80AwAAFD5JREFUeNrsnXV83Ea+wLVsew1rWDMzM9sxxswYs2O2E8eJ7bAdO+gwJ23D3CRNk7QpM/OVr3jt9Zjv3rt7/N788YS7ovVKa60u7mfn80l2d6SR5ivN/Gh+kiHwIymQBcQCYgGxgFhALCAWEAuIBcQCYgGxgFhA/skg61Icu0e9Fz3ImEuVgzp2SXBRhVVD2bi937JFChK2j1ahzHRajCBeSYyqjqvrFh9IwmaWyrSTTosOpJ61tnn1YgNJT2avP1a9yEAic9jrPXsWGcgSQxsOmHK0uESrAP8WhSLDzVVskKWGNkzxPpRNQK7XSgn+vc0/uEBUkBRDG7bzxYgOiaFUSBKjXUUEcTRQ7xbP7ziVuR7MSjt/qXiTnbVWUu/C6ygSLXWuubtjQyw7NV0sEGtftn4d5mduSbbT54OztUsa8umTaSMSiHcDS2VQIr+DZLJMBqmLHfIhi5aIpNlP5+7zSY9xoOg/uzZ+w7OE3fhxQxVSllhGo23GsS5/ZfjxI6Tb1MRLefQa2DCBXg8XW5E9xF61/vtyPnM9V2cqV1tPOlDsOB9ELg+JDOLbRfqx3IpzO1mftBR3bNZDEPT5fmvX2IyZF2dheWGL3hJ7sX32aPKPFUWcjZywXWEK9NtPIXJZHwVDwnZ0hIvIIHLqEEjmek/q/AAoRL54QNRyqhuu9IsPvjQkLkghTXftTuPW7j/l8IRGvrTSQKATyHADYNyqWkyQxmJahXs4RyUCQMR+WO1lPUAH+SnA7lVlnoggS5i6oJdLu7T8TXLgsGoSxDxL54AegKdIbEpap/WeRLFAAgOYNncgJ283XLopXBGZJQEKuOffRW2gkCCqyT8EVu15ZVJRQLL9ZczKVi72r7ID7MLGTyfc8URQtp4Mchyu16JhjNoDviKAxLHNhurzHFoWwFbILkxTbIQ7DmvG+OdJIAcRcwfb02OTr/lBwn0YVQPhu+QcWqbC/+AR2I58PwF9gsFFf0yA7CX5CZ5XIswPQpu/ZeNRxd5cGo6tgv+rccV0t83fXp/Ihi3n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"
                alt=""
              />
              <h1 className="header-2 mb-6 dark:text-white">page not found?</h1>
              <p className="paragraph">Whoops, this is embarassing.</p>
              <p className="paragraph">
                Looks like the page you were looking for wasn't found.
              </p>
              <Link to={'/home'}>
              <button className="btn bg-green-600 hover:bg-green-700 text-white px-6 py-2 mt-3">Back to Home</button>
              </Link>
            </div>
            <div className="mt-1 mb-[100px]">
              <p className="paragraph">
                &copy; 2023 Hously. Design & Develop with
                <RxHeartFilled className="text-red-600 inline-block mb-1" /> by
                Team-F.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
