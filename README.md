## Overview

This project displays real-time soil moisture sensor data on a webpage. It uses Firebase to retrieve the latest sensor data and updates the webpage dynamically. The user interface includes a reset button to reposition the data container and a draggable container to move the data display around the screen.

## File Structure

- **index.html**: Main HTML file containing the structure and logic for displaying soil moisture sensor data.
- **styles.css**: CSS file for styling the webpage (linked in index.html but not provided).

## Key Components

### HTML Structure

- **Button**: A reset button (`#reset-btn`) to reset the position of the container displaying the sensor data.
- **Container**: A div (`.container`) that holds the sensor data elements.
  - **Heading**: An `<h1>` tag displaying the title "Soil Moisture Sensor Data".
  - **Sensor Value**: A div (`#sensorValue`) that shows the current sensor value.
  - **Sensor Status**: A div (`#sensorStatus`) that displays the water status.
  - **Level Bar**: A div container (`.level-bar-container`) with a nested div (`#levelBar`) representing the sensor value as a percentage.

### JavaScript Functionality

1. **Firebase Initialization**
   - The Firebase app is initialized with the project's configuration.
   - A reference (`dbRef`) to the database path 'soilMoistureSensor' is created.

2. **Update Functions**
   - `updateSensorValue(value)`: Updates the sensor value displayed on the webpage and the level bar width based on the sensor value.
   - `updateSensorStatus(status)`: Updates the sensor status displayed on the webpage.

3. **Real-time Data Listening**
   - Listens for the most recent value in the database and updates the sensor value and status accordingly.

4. **Draggable Container**
   - Allows the container to be dragged around the screen.
   - The initial position of the container is set to the center of the viewport.
   - Event listeners (`mousedown`, `mousemove`, `mouseup`) handle the dragging logic.
   - The reset button resets the container's position to the initial center position.

## Usage

1. **Setup Firebase**
   - Ensure the Firebase configuration details are correct.
   - Set up a Firebase project and real-time database.

2. **Run the Project**
   - Open `index.html` in a web browser.
   - The webpage will display the soil moisture sensor data, and the container can be dragged around the screen.

## Dependencies

- **Firebase**: The Firebase SDK is loaded via CDN for accessing the real-time database.

## Additional Notes

- The styling details are assumed to be in `styles.css`, which should be included in the project directory.
- Ensure proper permissions and security rules are set up in the Firebase project to allow reading sensor data.
