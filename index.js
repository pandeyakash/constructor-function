// Create an empty object i3
let i3 = {};

// Constructor function for creating an IPhone3 object
function IPhone3(color, display, camera, bluetooth) {
  // Assign properties to the object being created
  this.color = color;
  this.display = display;
  this.camera = camera;
  this.bluetooth = bluetooth;

  // Method to simulate dialing
  this.dial = function () {
    return `tring.. tring...`;
  };

  // Method to simulate sending a message
  this.sendMessage = function () {
    return `Sending message...`;
  };

  // Method to simulate clicking the camera
  this.cameraClick = function () {
    return `Camera clicked`;
  };

  // Method to simulate connecting to Bluetooth
  this.connectBluetooth = function () {
    return `Bluetooth connected successfully..`;
  };
}

// Use the call method to apply the IPhone3 constructor function to the i3 object
IPhone3.call(i3, "Blue", "5 inch", "2mp", "6.0");

// Log the i3 object to the console
console.log(i3);
