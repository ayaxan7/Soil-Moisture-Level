// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxDKummwyDqG-h7KEvn-_n_HhR53_QFdM",
    authDomain: "ayaan-ki-dua.firebaseapp.com",
    databaseURL: "https://ayaan-ki-dua-default-rtdb.firebaseio.com",
    projectId: "ayaan-ki-dua",
    storageBucket: "ayaan-ki-dua.appspot.com",
    messagingSenderId: "778293311636",
    appId: "1:778293311636:web:67fda08d5c2065e92f9c81",
    measurementId: "G-V05738QMH3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("Firebase initialized");

// Reference to the Firebase database path
const dbRef = firebase.database().ref('soilMoistureSensor');
console.log("Database reference set:", dbRef.toString());

// Function to update sensor value on the webpage
function updateSensorValue(value) {
    console.log("Updating sensor value to:", value);
    const sensorValueElement = document.getElementById('sensorValue');
    if (sensorValueElement) {
        sensorValueElement.textContent = `Current Value: ${value}`;
    } else {
        console.error("Element with id 'sensorValue' not found.");
    }
}

// Listen for changes in the database
dbRef.limitToLast(1).on('child_added', snapshot => {
    const data = snapshot.val();
    const sensorValue = data.value;
    console.log("Data received from Firebase:", data);
    updateSensorValue(sensorValue);
}, error => {
    console.error("Error fetching data from Firebase:", error.message);
});
