import React, {useEffect, useState} from 'react';
import './saoDocuments.css'
import {useParams} from "react-router-dom";
import Navigation2 from "../../UI Elements/navigation/Navigation2";
import {texts} from "../../../languages/language";
import {Document} from "../../../functions/helper";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

function SaoDocuments() {

    const {saoId} = useParams();

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        const newLanguage = language === "bosnian" ? "english" : "bosnian";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }

    const [documentData, setDocumentData] = useState<Document>()

    useEffect(() => {
        fetch(   `https://sysbackend-jhed.onrender.com/SAO/Documents`)
            .then((res) => res.json())
            .then((data) => setDocumentData(data as Document))
    }, []);

    const handleSubmit = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>, documentId: string) => {
        event.preventDefault();
        const response = await axios.delete(`https://sysbackend-jhed.onrender.com/SAO/Documents/Delete/${documentId}`);
        // @ts-ignore
        const newData = documentData.filter((document: { _id: string; }) => document._id !== documentId);
        setDocumentData(newData);
        if(language == 'bosnian'){
            toast.success('Zahtjev za dokument uspješno obrisan!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
        else if(language == 'english'){
            toast.success('Document request successfully deleted!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
    };

    return (
        <div>
            <div className={"sao-dashboard-main"} style={{minHeight: "130vh"}}>
                <Navigation2 field1={texts[language].saoButton1} field2={texts[language].backToDash} page1={texts[language].navBut4} page2={texts[language].saoNav2} page3={texts[language].saoNav3}
                             navPage1={`/Dashboard/SAO/${saoId}`}
                             navPage2={`/SAO/Register/${saoId}`}
                             navPage3={`/SAO/Recover/${saoId}`} onClick={toggleLanguage}
                             field4={texts[language].navField2} field5={texts[language].navField3} field6={texts[language].navField4}
                             navigate1={`/Dashboard/SAO/${saoId}`} navigate2={'/Professor/Settings'} navigate3={'https://www.ius.edu.ba/en/contact'} navigate4={'/Login/SAO'}
                />
                <div style={{paddingTop: "7rem"}} className={"dashboard-heading"}>
                    <div className={"dashboard-sao"}>
                        {documentData && documentData.map((document: Document) => (
                            <div className="card-sao" key={document._id}>
                                <div className="tools-sao" onClick={(event) => handleSubmit(event, document._id)}>
                                    <div className="circle-sao">
                                        <span className="red-sao box-sao"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="yellow-sao box-sao"></span>
                                    </div>
                                    <div className="circle">
                                        <span className="green-sao box-sao"></span>
                                    </div>
                                </div>
                                <div className="card__content">
                                    <h6 style={{margin: "0", padding: "0"}}>{texts[language].saoDoc1}</h6>
                                    <h3 style={{margin: "0", paddingBottom: "20px"}}>{document.docType}</h3>
                                    <hr/>
                                    <h6 style={{margin: "0", padding: "0"}}>{texts[language].saoDoc2}</h6>
                                    <h3 style={{margin: "0", paddingBottom: "20px"}}>{document.docLanguage}</h3>
                                    <hr/>
                                    <h5 style={{margin: "0", padding: "0"}}>{texts[language].saoDoc3} {document.docCopies}</h5>
                                    <p>{document.docReason}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    );
}

export default SaoDocuments;