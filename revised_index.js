const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Sample disease prediction logic
const symptomsToDisease = {
    'fever': 'flu',
    'cough': 'cold',
    'headache': 'migraine',
    'fatigue': 'fatigue'
};

app.post('/api/health', (req, res) => {
    const symptoms = req.body.symptoms;
    const diagnosis = symptoms.map(symptom => symptomsToDisease[symptom.toLowerCase()] || 'unknown');
    res.json({ diagnosis });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
