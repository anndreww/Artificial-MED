import React from 'react';

const TermeniConditii: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Termeni și Condiții - Artificial MED</h1>
            <p className="text-gray-600 mb-8">Data intrării în vigoare: [1 septembrie 2024]</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introducere</h2>
            <p className="text-gray-700 mb-6">
                Acești Termeni și Condiții reglementează utilizarea platformei Artificial MED, dedicată detectării cancerului 
                cu ajutorul inteligenței artificiale. Prin utilizarea platformei noastre, sunteți de acord cu acești termeni.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Definiții</h2>
            <p className="text-gray-700 mb-6">
                În acest document:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>"Platforma"</strong> se referă la site-ul Artificial MED și aplicațiile aferente.</li>
                <li><strong>"Utilizator"</strong> înseamnă orice persoană care folosește platforma Artificial MED.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Scopul platformei</h2>
            <p className="text-gray-700 mb-6">
                Artificial MED oferă utilizatorilor un serviciu bazat pe inteligență artificială pentru detectarea precoce a 
                cancerului pe baza datelor medicale furnizate de aceștia.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Utilizarea serviciului</h2>
            <p className="text-gray-700 mb-6">
                Utilizatorii sunt obligați să furnizeze informații medicale corecte și complete pentru a permite o analiză cât 
                mai precisă. Utilizarea serviciului este destinată exclusiv pentru scopuri medicale și informaționale, neputând 
                fi considerată un diagnostic final sau un tratament medical complet.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitarea răspunderii</h2>
            <p className="text-gray-700 mb-6">
                Artificial MED nu își asumă responsabilitatea pentru acuratețea rezultatelor obținute prin platformă. Diagnosticul 
                final trebuie stabilit de un medic specialist.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Proprietatea intelectuală</h2>
            <p className="text-gray-700 mb-6">
                Toate materialele și tehnologiile utilizate pe platformă, inclusiv algoritmii de inteligență artificială, sunt 
                proprietatea Artificial MED și sunt protejate de legislația privind drepturile de autor.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Modificări ale Termenilor și Condițiilor</h2>
            <p className="text-gray-700 mb-6">
                Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment. Orice modificare va fi afișată pe 
                platformă, iar utilizarea continuă a platformei implică acceptarea acestor modificări.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact</h2>
            <p className="text-gray-700">
                Pentru orice întrebări sau nelămuriri, ne puteți contacta la adresa de e-mail: 
                <a href="mailto:contact@artificialmed.ro" className="text-blue-500 hover:underline"> contact@artificialmed.com</a>.
            </p>
        </div>
    );
};

export default TermeniConditii;
