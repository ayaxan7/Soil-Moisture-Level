import serial
import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Initialize the Firebase Admin SDK
cred = credentials.Certificate('authfile.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://ayaan-ki-dua-default-rtdb.firebaseio.com/'
})

# Replace 'COM6' with your Arduino's port name
arduino_port = 'COM6'  # Make sure this matches your Arduino's port
baud_rate = 9600

# Attempt to open the serial connection
try:
    ser = serial.Serial(arduino_port, baud_rate)
    time.sleep(2)  # Wait for the connection to establish
except serial.SerialException as e:
    print(f"Could not open port {arduino_port}: {e}")
    exit(1)

# Reference to the Firebase database path
ref = db.reference('soilMoistureSensor')

try:
    while True:
        if ser.in_waiting > 0:
            # Read the line from the serial port
            sensor_data = ser.readline().decode('latin-1').strip()
            print(f"Read from Arduino: {sensor_data}")

            # Check if the data is numerical or a status message
            if sensor_data.isdigit():
                value = int(sensor_data)
                status = None
            else:
                value = None
                status = sensor_data

            if value is not None:
                # Store the current value
                current_value = value

            if status is not None:
                # Push both current value and status together
                ref.push({
                    'timestamp': int(time.time()),
                    'value': current_value,
                    'status': status
                })
                print("Uploaded to Firebase")

except KeyboardInterrupt:
    print("Exiting program")

finally:
    ser.close()
