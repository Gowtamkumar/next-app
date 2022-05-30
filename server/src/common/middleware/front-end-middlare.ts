import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from 'express';
import { join, resolve } from "path";
// import path from "path";
const allowedExt = ['.js', '.ico', '.css', '.png', '.jpg', '.woff2', '.woff', '.ttf', '.svg'];
const resolvePath = (file: string) => resolve(`../dist/${file}`);
const resolvePathToClient = (file: string) => resolve(`../../../../client/build/${file}`);
const RoutePrefix = 'api';
export const FrontendFunMiddleware = (req: Request, res: Response, next: () => void): void => {
  const { url } = req;
  if (url.indexOf(RoutePrefix) === 1) {
    // console.log(`if starts with /${RoutePrefix} --> continue with execution`);
    next();
  } else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
    console.log(`else if it has a file extension --> resolve the file${url}`);
    // res.sendFile(resolvePathToClient(url));
    res.sendFile(resolvePath(url));
  } else {
    // console.log(`else serve index.html`);
    res.sendFile(join(__dirname, '../../../../client/build/index.html'));
    // res.sendFile(resolvePathToClient('index.html'));
    // res.sendFile(resolvePath('index.html'));
  }
  // next();
};


@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { url } = req;
    console.log("Frontend middleeware", url);
    if (url.indexOf(RoutePrefix) === 1) {
      // it starts with /api --> continue with execution
      next();
    } else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
      // it has a file extension --> resolve the file
      // res.sendFile(path.join(__dirname, '../../../../client/build/index.html'));
      res.sendFile(resolvePath(url));
    } else {
      // res.sendFile(path.join(__dirname, '../../../../client/build/index.html'));
      res.sendFile(resolvePath('index.html'));
    }
  }
}
// export class ClientMiddleware implements NestMiddleware {
//   constructor(private readonly clientService: ClientService) {}
//   async use(req: Request, res: Response, next: () => void) {
//     if (/[^\\/]+\.[^\\/]+$/.test(req.path)) {
//       const file = getAssetPath(req.path);
//       res.sendFile(file, (err) => {
//       if (err) {
//        res.status(err.status).end();
//       }
//      });
//     } else {
//       return next();
//     }
//   }
// }
// export function FrontendMiddleware(req, res, next) {
//   const { baseUrl } = req;
//   if (baseUrl.indexOf('/api') === 0) {
//     next();
//   } else {
//     res.sendFile(<path to your index.html file>);
//   }
// }