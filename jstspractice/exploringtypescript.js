var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a, _b;
{
    var age_1 = 20;
    var coder = "Bhavya";
    var incrementAge = function (ageparam) {
        return age_1 = ageparam + 1;
    };
    var printAge = function (age) {
        console.log(age);
    };
    incrementAge(age_1);
    printAge(age_1);
    var roomname = void 0;
    roomname = 801;
    roomname = "Towrb 801";
    var dhoniAge = void 0;
    dhoniAge = 42;
    incrementAge(dhoniAge);
    var incAge2 = function (age) {
        var _a;
        return (_a = age + 1) !== null && _a !== void 0 ? _a : 21;
    };
    var incAge3 = function (age) {
        return age !== null && age !== void 0 ? age : 21;
    };
    var incAge4 = function (age) {
        if (age === void 0) { age = 21; }
        return age;
    };
    incAge2(null);
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.active = false;
            this.name = name;
            this.age = age;
        }
        Person.prototype.celebrateBirthday = function () {
            if (this.age !== undefined)
                this.age++;
            this.name = "Ranbir";
        };
        return Person;
    }());
    var Person2 = /** @class */ (function () {
        function Person2(name, age) {
            this.name = name;
            this.age = age;
            this.active = false;
        }
        Person2.prototype.celebrateBirthday = function () {
            if (this.age !== undefined)
                this.age++;
            this.name = "Ranbir1";
        };
        return Person2;
    }());
    var Person3 = /** @class */ (function () {
        function Person3(name, age) {
            this.name = name;
            this.age = age;
            this.active = false;
            this._changed = false;
        }
        Person3.prototype.celebrateBirthday = function () {
            if (this.age !== undefined)
                this.age++;
            this.name = "Ranbir1";
        };
        Object.defineProperty(Person3.prototype, "changed", {
            get: function () {
                return this._changed;
            },
            set: function (value) {
                this._changed = value;
            },
            enumerable: false,
            configurable: true
        });
        return Person3;
    }());
    var person1 = new Person("Bhavya", 28);
    var person2 = new Person("Bhavya1");
    person1.celebrateBirthday();
    console.log(person1.name);
    console.log(person1.age);
    var person3 = new Person2("Bhavya1", 28);
    var person4 = new Person2("Bhavya1");
    person1.celebrateBirthday();
    console.log(person3.name);
    console.log(person3.age);
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child(name, toys, age) {
            var _this = _super.call(this, name, age) || this;
            _this.toys = toys;
            return _this;
        }
        return Child;
    }(Person3));
    var child1 = new Child('taimur', ['car', 'star parents'], 5);
    console.log(child1);
    var CheckingAccount = /** @class */ (function () {
        function CheckingAccount(id, balance, transactions) {
            this.id = id;
            this.balance = balance;
            this.transactions = transactions;
        }
        CheckingAccount.prototype.addBalance = function (newValue) {
            this.balance += newValue;
        };
        return CheckingAccount;
    }());
    var account = { id: 34, balance: 8232, transactions: [100, 200] };
    var transaction1 = { date: new Date(), amount: 1000, desc: "Deposit" };
    var EnahncedTrasnaction = /** @class */ (function () {
        function EnahncedTrasnaction(date, amount, desc) {
            this.date = date;
            this.amount = amount;
            this.desc = desc;
        }
        return EnahncedTrasnaction;
    }());
    var s1 = { name: "abc", role: "teacher", id: 1, salary: 200000 };
    var t1 = false;
    var t2 = 5;
    function convertNumToArray(x, y) {
        return [x, y];
    }
    var result1 = convertNumToArray(20, 30);
    console.log(result1);
    function convertNumToArrayGeneric(x, y) {
        return [x, y];
    }
    var result2 = convertNumToArrayGeneric("20", "30");
    console.log(result2);
    var result3 = convertNumToArrayGeneric(20, 30);
    console.log(result3);
    // let result4= convertNumToArrayGeneric("20",30);
    // console.log(result4);
    var AccountManager = /** @class */ (function () {
        function AccountManager(account) {
            this.account = account;
        }
        return AccountManager;
    }());
    var checkAccount = new AccountManager(new CheckingAccount(1, 200, [1, 2, 3]));
    ;
    var ttype = 0 /* TransactionType.Deposit */;
    console.log(ttype);
    var user = { name: "Mat", active: true };
    var user1 = { name: "Mat", active: true, password: "test" };
    console.log(((_a = user.password) === null || _a === void 0 ? void 0 : _a.length) || "No pass set");
    console.log(((_b = user1.password) === null || _b === void 0 ? void 0 : _b.length) || "No pass set");
    var el = document.getElementById("dummyId");
    console.log(el.value);
}
