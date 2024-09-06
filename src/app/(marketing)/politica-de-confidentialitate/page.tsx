import React from 'react';

const PoliticaConfidentialitate: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Politica de Confidențialitate - Artificial MED</h1>
            <p className="text-gray-600 mb-8">Data intrării în vigoare: [1 septembrie 2024]</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introducere</h2>
            <p className="text-gray-700 mb-6">
                La Artificial MED, ne angajăm să protejăm confidențialitatea datelor dvs. și să asigurăm că informațiile personale 
                pe care ni le furnizați sunt utilizate doar în scopurile descrise în această politică. Platforma noastră folosește 
                inteligența artificială pentru a ajuta la detectarea cancerului, iar datele dvs. sunt tratate cu cea mai mare grijă 
                și responsabilitate.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Colectarea și utilizarea datelor</h2>
            <p className="text-gray-700 mb-6">
                Colectăm informații personale de la utilizatorii noștri, inclusiv date medicale, pentru a putea oferi servicii personalizate 
                și precise de detectare a cancerului. Aceste informații pot include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Nume și prenume</li>
                <li>Adresa de e-mail</li>
                <li>Date medicale relevante</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Scopurile prelucrării datelor</h2>
            <p className="text-gray-700 mb-6">Datele dvs. sunt colectate pentru următoarele scopuri:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Analiza medicală și detectarea cancerului prin intermediul algoritmilor AI</li>
                <li>Îmbunătățirea serviciilor noastre medicale</li>
                <li>Comunicarea cu utilizatorii privind starea sănătății lor și oferirea de suport tehnic</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Partajarea datelor cu terți</h2>
            <p className="text-gray-700 mb-6">
                Nu vom partaja informațiile dvs. personale cu terți fără consimțământul dvs., cu excepția cazurilor prevăzute de lege sau 
                în cazul colaborării cu parteneri medicali pentru analiza datelor.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Securitatea datelor</h2>
            <p className="text-gray-700 mb-6">
                Artificial MED implementează măsuri tehnice și organizatorice pentru a proteja datele dvs. împotriva accesului neautorizat, 
                pierderii sau alterării acestora.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Drepturile dvs.</h2>
            <p className="text-gray-700 mb-6">
                În conformitate cu legislația în vigoare, aveți următoarele drepturi:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Dreptul de acces la datele dvs.</li>
                <li>Dreptul de rectificare sau ștergere a datelor</li>
                <li>Dreptul de a vă retrage consimțământul pentru prelucrarea datelor</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact</h2>
            <p className="text-gray-700">
                Pentru orice întrebări legate de această Politică de Confidențialitate, vă rugăm să ne contactați la adresa de e-mail: 
                <a href="mailto:contact@artificialmed.ro" className="text-blue-500 hover:underline"> contact@artificialmed.ro</a>.
            </p>
        </div>
    );
};

export default PoliticaConfidentialitate;
