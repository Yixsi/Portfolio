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
exports.id = "pages/api/sendEmail";
exports.ids = ["pages/api/sendEmail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/mailer.js":
/*!*****************************!*\
  !*** ./pages/api/mailer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendEmail\": () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\n// Create a transporter using email provider's SMTP settings\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    service: \"Gmail\",\n    auth: {\n        user: \"yixsi3103@gmail.com\",\n        pass: \"your-email-password\"\n    }\n});\nasync function sendEmail({ name , email , message  }) {\n    const mailOptions = {\n        from: email,\n        to: \"yixsi3103@gmail.com\",\n        subject: \"New message from your portfolio\",\n        text: `Name: ${name}\\nEmail: ${email}\\n\\n${message}`\n    };\n    try {\n        await transporter.sendMail(mailOptions);\n        return true;\n    } catch (error) {\n        throw new Error(\"Failed to send email.\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUVwQyw0REFBNEQ7QUFDNUQsTUFBTUMsY0FBY0QsaUVBQTBCLENBQUM7SUFDN0NHLFNBQVM7SUFDVEMsTUFBTTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtBQUNGO0FBRU8sZUFBZUMsVUFBVSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFLEVBQUU7SUFFeEQsTUFBTUMsY0FBYztRQUNsQkMsTUFBTUg7UUFDTkksSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLE1BQU0sQ0FBQyxNQUFNLEVBQUVQLEtBQUssU0FBUyxFQUFFQyxNQUFNLElBQUksRUFBRUMsUUFBUSxDQUFDO0lBQ3REO0lBRUEsSUFBSTtRQUVGLE1BQU1ULFlBQVllLFFBQVEsQ0FBQ0w7UUFDM0IsT0FBTyxJQUFJO0lBQ2IsRUFBRSxPQUFPTSxPQUFPO1FBQ2QsTUFBTSxJQUFJQyxNQUFNLHlCQUF5QjtJQUMzQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9hcGkvbWFpbGVyLmpzP2I1NzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XHJcblxyXG4vLyBDcmVhdGUgYSB0cmFuc3BvcnRlciB1c2luZyBlbWFpbCBwcm92aWRlcidzIFNNVFAgc2V0dGluZ3NcclxuY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgc2VydmljZTogJ0dtYWlsJyxcclxuICBhdXRoOiB7XHJcbiAgICB1c2VyOiAneWl4c2kzMTAzQGdtYWlsLmNvbScsXHJcbiAgICBwYXNzOiAneW91ci1lbWFpbC1wYXNzd29yZCcsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZEVtYWlsKHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSkge1xyXG5cclxuICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcclxuICAgIGZyb206IGVtYWlsLFxyXG4gICAgdG86ICd5aXhzaTMxMDNAZ21haWwuY29tJyxcclxuICAgIHN1YmplY3Q6ICdOZXcgbWVzc2FnZSBmcm9tIHlvdXIgcG9ydGZvbGlvJyxcclxuICAgIHRleHQ6IGBOYW1lOiAke25hbWV9XFxuRW1haWw6ICR7ZW1haWx9XFxuXFxuJHttZXNzYWdlfWAsXHJcbiAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIFxyXG4gICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHNlbmQgZW1haWwuJyk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwic2VuZEVtYWlsIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsInRleHQiLCJzZW5kTWFpbCIsImVycm9yIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/mailer.js\n");

/***/ }),

/***/ "(api)/./pages/api/sendEmail.js":
/*!********************************!*\
  !*** ./pages/api/sendEmail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _mailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mailer */ \"(api)/./pages/api/mailer.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name , email , message  } = req.body;\n        try {\n            await (0,_mailer__WEBPACK_IMPORTED_MODULE_0__.sendEmail)({\n                name,\n                email,\n                message\n            });\n            res.status(200).json({\n                message: \"Nice, your email was sent. :)\"\n            });\n        } catch (error) {\n            res.status(500).json({\n                error: \"Failed to send email. :c\"\n            });\n        }\n    } else {\n        res.status(400).json({\n            error: \"Invalid request method. :/\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZEVtYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFDO0FBRXRCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRTlDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRSxHQUFHTCxJQUFJTSxJQUFJO1FBRXpDLElBQUk7WUFDRixNQUFNUixrREFBU0EsQ0FBQztnQkFBRUs7Z0JBQU1DO2dCQUFPQztZQUFRO1lBQ3ZDSixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFSCxTQUFTO1lBQWdDO1FBQ2xFLEVBQUUsT0FBT0ksT0FBTztZQUNkUixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQTJCO1FBQzNEO0lBQ0YsT0FBTztRQUNMUixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBNkI7SUFDN0QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9hcGkvc2VuZEVtYWlsLmpzPzIwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VuZEVtYWlsIH0gZnJvbSAnLi9tYWlsZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBtZXNzYWdlIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBzZW5kRW1haWwoeyBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9KTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnTmljZSwgeW91ciBlbWFpbCB3YXMgc2VudC4gOiknIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBzZW5kIGVtYWlsLiA6YycgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIHJlcXVlc3QgbWV0aG9kLiA6LycgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzZW5kRW1haWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendEmail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendEmail.js"));
module.exports = __webpack_exports__;

})();