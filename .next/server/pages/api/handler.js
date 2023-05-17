"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/handler";
exports.ids = ["pages/api/handler"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/handler.js":
/*!******************************!*\
  !*** ./pages/api/handler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _mailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mailer */ \"(api)/./pages/api/mailer.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name , email , message  } = req.body;\n        try {\n            await (0,_mailer__WEBPACK_IMPORTED_MODULE_0__.sendEmail)({\n                name,\n                email,\n                message\n            });\n            res.status(200).json({\n                message: \"Nice, your email was sent. :)\"\n            });\n        } catch (error) {\n            res.status(500).json({\n                error: \"Failed to send email. :c\"\n            });\n        }\n    } else {\n        res.status(400).json({\n            error: \"Invalid request method. :/\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGFuZGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxQztBQUV0QixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR0wsSUFBSU0sSUFBSTtRQUV6QyxJQUFJO1lBQ0YsTUFBTVIsa0RBQVNBLENBQUM7Z0JBQUVLO2dCQUFNQztnQkFBT0M7WUFBUTtZQUN2Q0osSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUgsU0FBUztZQUFnQztRQUNsRSxFQUFFLE9BQU9JLE9BQU87WUFDZFIsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUEyQjtRQUMzRDtJQUNGLE9BQU87UUFDTFIsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTZCO0lBQzdELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcGFnZXMvYXBpL2hhbmRsZXIuanM/N2VlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZW5kRW1haWwgfSBmcm9tICcuL21haWxlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcblxyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNlbmRFbWFpbCh7IG5hbWUsIGVtYWlsLCBtZXNzYWdlIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdOaWNlLCB5b3VyIGVtYWlsIHdhcyBzZW50LiA6KScgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHNlbmQgZW1haWwuIDpjJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgcmVxdWVzdCBtZXRob2QuIDovJyB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInNlbmRFbWFpbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/handler.js\n");

/***/ }),

/***/ "(api)/./pages/api/mailer.js":
/*!*****************************!*\
  !*** ./pages/api/mailer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendEmail\": () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\n// Create a transporter using email provider's SMTP settings\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    service: \"Gmail\",\n    auth: {\n        user: \"yixsi3103@gmail.com\",\n        pass: process.env.EMAIL_PASSWORD\n    }\n});\nasync function sendEmail({ name , email , message  }) {\n    const mailOptions = {\n        from: email,\n        to: \"yixsi3103@gmail.com\",\n        subject: \"New message from your portfolio\",\n        text: `Name: ${name}\\nEmail: ${email}\\n\\n${message}`\n    };\n    try {\n        await transporter.sendMail(mailOptions);\n        return true;\n    } catch (error) {\n        throw new Error(\"Failed to send email.\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUVwQyw0REFBNEQ7QUFDNUQsTUFBTUMsY0FBY0QsaUVBQTBCLENBQUM7SUFDN0NHLFNBQVM7SUFDVEMsTUFBTTtRQUNKQyxNQUFNO1FBQ05DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztJQUNsQztBQUNGO0FBRU8sZUFBZUMsVUFBVSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFLEVBQUU7SUFFeEQsTUFBTUMsY0FBYztRQUNsQkMsTUFBTUg7UUFDTkksSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLE1BQU0sQ0FBQyxNQUFNLEVBQUVQLEtBQUssU0FBUyxFQUFFQyxNQUFNLElBQUksRUFBRUMsUUFBUSxDQUFDO0lBQ3REO0lBRUEsSUFBSTtRQUVGLE1BQU1aLFlBQVlrQixRQUFRLENBQUNMO1FBQzNCLE9BQU8sSUFBSTtJQUNiLEVBQUUsT0FBT00sT0FBTztRQUNkLE1BQU0sSUFBSUMsTUFBTSx5QkFBeUI7SUFDM0M7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcGFnZXMvYXBpL21haWxlci5qcz9iNTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5cclxuLy8gQ3JlYXRlIGEgdHJhbnNwb3J0ZXIgdXNpbmcgZW1haWwgcHJvdmlkZXIncyBTTVRQIHNldHRpbmdzXHJcbmNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gIHNlcnZpY2U6ICdHbWFpbCcsXHJcbiAgYXV0aDoge1xyXG4gICAgdXNlcjogJ3lpeHNpMzEwM0BnbWFpbC5jb20nLFxyXG4gICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfUEFTU1dPUkQsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZEVtYWlsKHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSkge1xyXG5cclxuICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcclxuICAgIGZyb206IGVtYWlsLFxyXG4gICAgdG86ICd5aXhzaTMxMDNAZ21haWwuY29tJyxcclxuICAgIHN1YmplY3Q6ICdOZXcgbWVzc2FnZSBmcm9tIHlvdXIgcG9ydGZvbGlvJyxcclxuICAgIHRleHQ6IGBOYW1lOiAke25hbWV9XFxuRW1haWw6ICR7ZW1haWx9XFxuXFxuJHttZXNzYWdlfWAsXHJcbiAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIFxyXG4gICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHNlbmQgZW1haWwuJyk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwicHJvY2VzcyIsImVudiIsIkVNQUlMX1BBU1NXT1JEIiwic2VuZEVtYWlsIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsInRleHQiLCJzZW5kTWFpbCIsImVycm9yIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/mailer.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/handler.js"));
module.exports = __webpack_exports__;

})();