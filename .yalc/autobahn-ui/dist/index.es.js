import e from"react";var a=function(a){var t=a.children,n=a.variant,c=void 0===n?"primary":n,r=a.shape,l=void 0===r?"":r,o=a.className,i=void 0===o?"":o,m=a.onClick;return e.createElement("button",{className:"atbh-btn ".concat(c&&"atbh-btn-".concat(c)," ").concat(l&&"atbh-btn-".concat(l)," ").concat(i&&"".concat(i)),onClick:m},t)},t=function(){return t=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var c in a=arguments[t])Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);return e},t.apply(this,arguments)},n=function(a){var n=a.showLabel,c=void 0===n||n,r=a.label,l=void 0===r?"":r,o=a.type,i=a.placeholder,m=a.className,s=void 0===m?"":m,v=a.name;return e.createElement("div",{className:"atbh-input ".concat(s&&"".concat(s))},c&&l&&e.createElement("label",{htmlFor:v},l),e.createElement("input",t({id:v,type:o,name:v,placeholder:i},a)))},c=function(a){var n=a.showLabel,c=void 0===n||n,r=a.label,l=void 0===r?"":r,o=a.name,i=a.options,m=a.className,s=void 0===m?"":m,v=Object.entries(i).map((function(a){var t=a[0],n=a[1];return e.createElement("option",{value:t},n)}));return e.createElement("div",{className:"atbh-select-container"},e.createElement("div",{className:"atbh-select ".concat(s&&"".concat(s))},c&&l&&e.createElement("label",{htmlFor:o},l),e.createElement("select",t({id:o,name:o},a),v)),e.createElement("span",{className:"atbh-select-arrow"},"▼"))},r=function(a){var n=a.value,c=a.label,r=a.className,l=void 0===r?"":r,o=a.name;return e.createElement("div",{className:"atbh-radio ".concat(l&&"".concat(l))},e.createElement("input",t({type:"radio",id:o,value:n},a)),e.createElement("label",{htmlFor:o},c))};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */export{a as ButtonComponent,n as InputComponent,r as RadioComponent,c as SelectComponent};
