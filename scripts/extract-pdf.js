import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pdfParse from 'pdf-parse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function extractPDF() {
  try {
    const pdfPath = path.join(__dirname, '../Hamro_Foolbari_Project_Code_v1.pdf');
    const dataBuffer = fs.readFileSync(pdfPath);
    
    console.log('📄 Extracting PDF content...');
    const data = await pdfParse(dataBuffer);
    
    const knowledgeBase = {
      projectName: 'Hamro Foolbari, Sajha Foolbari Gyan Kunja',
      location: 'Ramechhap, Nepal',
      corePrinciples: [
        'Learning by doing',
        'Local teachers and governance',
        'Civic education as a parallel track',
        'Transparency by default',
        'No religious or political affiliation'
      ],
      pdfContent: data.text,
      pageCount: data.numpages,
      lastUpdated: new Date().toISOString(),
      metadata: {
        info: data.info,
        numPages: data.numpages
      }
    };
    
    // Save knowledge base
    const outputDir = path.join(__dirname, '../data');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const outputPath = path.join(outputDir, 'knowledge-base.json');
    fs.writeFileSync(outputPath, JSON.stringify(knowledgeBase, null, 2));
    
    console.log('✅ Knowledge base created successfully!');
    console.log(`📊 Pages extracted: ${data.numpages}`);
    console.log(`📝 Content length: ${data.text.length} characters`);
    console.log(`💾 Saved to: ${outputPath}`);
    
    // Also save a readable text version
    const textPath = path.join(outputDir, 'project-content.txt');
    fs.writeFileSync(textPath, data.text);
    console.log(`📄 Text version saved to: ${textPath}`);
    
  } catch (error) {
    console.error('❌ Error extracting PDF:', error.message);
    process.exit(1);
  }
}

extractPDF();
