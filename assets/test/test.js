QUnit.test('Testing addition function with four sets of inputs', function (assert) {
    assert.throws(function () { sum(); }, new Error("only numbers are allowed"), 'Passing in array correctly raises an Error');
    assert.strictEqual(sum(1,2,3,4), 10, 'All positive numbers');
    assert.strictEqual(sum(1,-2,5,0), 4, 'Positive  numbers');
    assert.strictEqual(sum(-1,-2,-4,2), -5, 'All are positive numbers');
});