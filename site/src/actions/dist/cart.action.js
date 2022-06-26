"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CartAction = void 0;
var base_action_1 = require("./base.action");
var product_action_1 = require("./product.action");
var CartAction = /** @class */ (function (_super) {
    __extends(CartAction, _super);
    function CartAction() {
        var _this = _super.call(this) || this;
        _this.productAction = new product_action_1.ProductAction();
        return _this;
    }
    CartAction.prototype.getCardInfo = function () {
        return __awaiter(this, void 0, Promise, function () {
            var card, ids, quantities, product;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCard()];
                    case 1:
                        card = _a.sent();
                        ids = card.map(function (item) { return item.productId; });
                        quantities = card.map(function (item) { return item.quantity; });
                        return [4 /*yield*/, Promise.all(ids.map(function (id) { return __awaiter(_this, void 0, void 0, function () {
                                var product;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.productAction.getProductDetail(id)];
                                        case 1:
                                            product = _a.sent();
                                            return [2 /*return*/, product];
                                    }
                                });
                            }); }))];
                    case 2:
                        product = _a.sent();
                        return [2 /*return*/, product === null || product === void 0 ? void 0 : product.map(function (item, index) { return ({
                                product: item,
                                quantity: quantities[index]
                            }); })];
                }
            });
        });
    };
    CartAction.prototype.getCard = function () {
        return __awaiter(this, void 0, Promise, function () {
            var rawData;
            return __generator(this, function (_a) {
                try {
                    rawData = this.storageProvider.getItem(this.cardKey);
                    if (!rawData) {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/, JSON.parse(rawData)];
                }
                catch (_b) {
                    return [2 /*return*/, []];
                }
                return [2 /*return*/];
            });
        });
    };
    CartAction.prototype.addProdutCard = function (addProductCardDto) {
        return __awaiter(this, void 0, Promise, function () {
            var cardData, existed, newData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCard()];
                    case 1:
                        cardData = _a.sent();
                        existed = cardData.filter(function (item) { return item.productId === addProductCardDto.productId; }).length > 0;
                        if (!existed) {
                            cardData.push(addProductCardDto);
                            this.storageProvider.setItem(this.cardKey, JSON.stringify(cardData));
                            return [2 /*return*/, true];
                        }
                        newData = cardData.map(function (item) {
                            if (item.productId === addProductCardDto.productId) {
                                return __assign(__assign({}, item), { quantity: item.quantity + addProductCardDto.quantity });
                            }
                            return item;
                        });
                        console.log(newData, "add to exist produt");
                        this.storageProvider.setItem(this.cardKey, JSON.stringify(newData));
                        return [2 /*return*/, true];
                }
            });
        });
    };
    CartAction.prototype.deleteProductCard = function (productId) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var cardData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getCard()];
                    case 1:
                        cardData = (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return item.productId !== productId; });
                        this.storageProvider.setItem(this.cardKey, JSON.stringify(cardData));
                        return [2 /*return*/, true];
                }
            });
        });
    };
    CartAction.prototype.changeProductQuantity = function (productId, amount) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var cardData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getCard()];
                    case 1:
                        cardData = (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.map(function (item) {
                            if (item.productId === productId &&
                                item.quantity + amount > 0) {
                                return __assign(__assign({}, item), { quantity: item.quantity + amount });
                            }
                            return item;
                        });
                        console.log(cardData);
                        this.storageProvider.setItem(this.cardKey, JSON.stringify(cardData));
                        return [2 /*return*/, true];
                }
            });
        });
    };
    CartAction.prototype.submitCard = function (submitOrderDto) {
        return __awaiter(this, void 0, Promise, function () {
            var cart, products, quantities;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCard()];
                    case 1:
                        cart = _a.sent();
                        products = cart.map(function (item) { return item.productId; });
                        quantities = cart.map(function (item) { return item.quantity; });
                        return [2 /*return*/, this.networkProvider.request("/add-order.php", {
                                method: "POST",
                                body: __assign(__assign({}, submitOrderDto), { products: products,
                                    quantities: quantities })
                            })];
                }
            });
        });
    };
    CartAction.prototype.getOrder = function (orderId) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.networkProvider.request("/get-order-id.php?id=" + orderId, {
                        method: "GET"
                    })];
            });
        });
    };
    return CartAction;
}(base_action_1.BaseAction));
exports.CartAction = CartAction;
