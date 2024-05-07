function testTryCatchFinally() {
    try {
        console.log("Inside try block");
        throw new Error("Error occurred");
    }
    catch (error) {
        console.log("Inside catch block");
        console.error(error);
    }
    finally {
        console.log("Inside finally block");
    }
}
testTryCatchFinally();
