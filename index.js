const puppeteer = require('puppeteer');
const moment = require('moment');
const fs = require('fs');

const scripts=[
    "ACLBSL","ADBL","ADBLB","ADBLD83","AHPC","AIL","AKBSL","AKBSLP","AKJCL","AKPL","ALBSL","ALICL","ALICLP","AMFI","AMFIPO","API","AVU","BARUN",
    "BBC","BFC","BFCPO","BFLPO","BHBL","BHBLPO","BNL","BNT","BOKD2079","BOKL","BOKLPO","BPCL","BSBLPO","BSL","BSM",
    "CBBL","CBBLPO","CBL","CBLPO","CCBL","CCBLPO","CEFL","CEFLPO","CFCL","CFCLPO","CFL","CGH","CHCL","CHDC","CHL","CIT","CIZBD86","CLBSL","CLBSLP","CMB","CMBFLP","CMF1","CMF2","CORBL","CORBLP","CZBIL","CZBILP",
    "DDBL","DDBLPO","DHPL",
    "EBL","EBLCP","EBLD2078","EBLPO","EDBL","EDBLPO","EIC","EICPO",
    "FBBLPO","FHL","FMDBL","FMDBLP","FOWAD","FOWADP",
    "GBBL","GBBLPO","GBD80/81","GBIME","GBIMEP","GBLBS","GBLBSP","GDBL","GDBLPO","GFCL","GFCLPO","GGBSL","GHL","GIC","GILB","GILBPO","GIMES1","GLBSL","GLH","GLICL","GLICLP","GMFBS","GMFIL","GMFILP","GRDBL","GRDBLP","GRU","GUFL","GUFLPO","GWFD83",
    "HAMRO","HAMROP","HATH","HATHPO","HBL","HBLD83","HBLPO","HBT","HDHPC","HDL","HFL","HGI","HGIPO","HIDCL","HPPL","HURJA",
    "ICFC","ICFCD83","ICFCPO","IGI","IGIPO","ILBS",
    "JBBL","JBBLPO","JBLB","JBNL","JBNLPO","JFL","JFLPO","JLI","JOSHI","JSLBB","JSLBBP","JSM",
    "KBL","KBLD86","KBLPO","KEF","KKHC","KLBSL","KLBSLP","KMCDB","KMCDBP","KNBL","KNBLPO","KPCL","KRBL","KRBLPO","KSBBL","KSBBLD87","KSBBLP",
    "LBBL","LBBLPO","LBL","LBLD86","LBLPO","LEC","LEMF","LFC","LFCPO","LGIL","LGILPO","LICN","LICNPO","LLBS","LLBSPO","LUK",
    "MBL","MBLD2085","MBLPO","MDB","MDBLPO","MDBPO","MEGA","MEGAPO","MEN","MERO","MEROPO","MFIL","MFILPO","MFLD85","MHNL","MKLB","MLBBL","MLBBLP","MLBL","MLBLPO","MLBSL","MMFDB","MMFDBP","MNBBL","MNBBLP","MPFL","MPFLPO","MSLB","MSLBP","MSMBS","MSMBSP",
    "NABBC","NABIL","NABILP","NADEP","NADEPP","NAGRO","NBB","NBBD2085","NBBPO","NBBU","NBF2","NBL","NBLD82","NBLD87","NCCB","NCCBPO","NCCD86","NEF","NFD","NFS","NFSPO","NGPL","NHDL","NHPC","NIB","NIBD2082","NIBD84","NIBLPF","NIBPO","NIBSF1","NIBSF2","NICA","NICAD 85/86","NICAD8182","NICAD8283","NICAP","NICBF","NICD83/84","NICGF","NICL","NICLBSL","NICLPO","NIDC","NIDCPO","NIFRA","NIL","NILPO","NKU","NLBBL","NLBBLP","NLG","NLGPO","NLIC","NLICL","NLICLP","NLICP","NLO","NMB","NMB50","NMBD2085","NMBHF1","NMBMF","NMBMFP","NMBPO","NMFBS","NMFBSP","NRIC","NRN","NSEWA","NSEWAP","NSLB","NSLBP","NSM","NSMPO","NTC","NTL","NUBL","NUBLPO","NVG","NWC",
    "ODBL","ODBLPO","OHL",
    "PBLD84","PBLD86","PCBL","PCBLP","PDBLPO","PFL","PFLPO","PIC","PICL","PICLPO","PICPO","PLI","PLIC","PLICPO","PMHPL","PPCL","PRFLPO","PRIN","PRINPO","PROFL","PROFLP","PRVU","PRVUPO","PSDBLP","PSF",
    "RADHI","RBCL","RBCLPO","RHPC","RHPL","RJM","RLFL","RLFLPO","RLI","RMBFPO","RMDC","RMDCPO","RRHP","RSDC","RSDCP","RURU",
    "SABSL","SADBL","SADBLP","SAEF","SAND2085","SANIMA","SAPDBL","SAPDBLP","SBBLJ","SBBLJP","SBCF","SBD87","SBI","SBIBD86","SBIPO","SBL","SBLD2082","SBLD83","SBLD84","SBLPO","SBPP","SCB","SCBPO","SDESI","SDLBSL","SEF","SEOS","SFC","SFCL","SFCLP","SFCPO","SFFIL","SFFILP","SFMF","SGI","SHBL","SHBLPO","SHEL","SHINE","SHINEP","SHIVM","SHL","SHPC","SIC","SICL","SICLPO","SICPO","SIFC","SIFCPO","SIGS2","SIL","SILPO","SINDU","SINDUP","SJCL","SKBBL","SKBBLP","SLBBL","SLBBLP","SLBS","SLBSL","SLBSP","SLCF","SLICL","SLICLP","SMATA","SMATAP","SMB","SMBPO","SMFBS","SMFDB","SMFDBP","SODBLP","SPARS","SPDL","SRBL","SRBLD83","SRBLPO","SRD80","SRS","SSHL","STC","SWBBL","SWBBLP","SYFL","SYFLPO",
    "TMDBL","TMDBLP","TRH",
    "UFL","UFLPO","UIC","UICPO","ULI","UMHL","UMRH","UNHPL","UNL","UPCL","UPPER","USLB","USLBP",
    "VLBS","VLBSPO",
    "WOMI","WOMIPO",
    "YHL"
]
// const url = process.argv[2];
const baseurl="https://merolagani.com/CompanyDetail.aspx?symbol=";

async function run () {
    const startTime=moment();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // add this if browser logs needs to be logged
    // page.on('console', msg => console.log(msg.text()));
    const headings=['script','name','sector','shares_outstanding','market_price','percent_change','last_traded_on','52_weeks_high_low','120_day_average','1_year_yield','eps','pe_ratio','book_value','pbv','dividend','bonus','30_day_avg_volume','market_capitalization'];
    let csv=headings.join(",");
    for (let i = 0; i < scripts.length; i++) {
        const companyScript = scripts[i];
        const url=baseurl+companyScript;
        await page.goto(url);
        let bankName =  "";
        try{
            bankName= await page.$eval('#ctl00_ContentPlaceHolder1_CompanyDetail1_companyName', el => el.innerText);
        }catch(e){
            console.log("Name not found.");
        }
        console.log(`Initiating script for ${bankName} ${companyScript} over ${url}`);
        const data = await page.$$eval('#accordion tbody', tbodys => tbodys.map((tbody) => {
            const rows = tbody.querySelectorAll('tr');
            return Array.from(rows,row=>{
                const columns=row.querySelectorAll('td');
                const headings=row.querySelectorAll('th');
                let data=[];
                headings.forEach((heading,index) => {
                    data.push({
                        heading:heading.innerText,
                        value:columns[index]?columns[index].innerText:""
                    })
                });
                if(row.id == 'dividend-panel' || row.id == 'bonus-panel' || row.id == 'right-panel'){
                    return undefined;
                }
                return data;
                // return Array.from(columns,(column,index)=>{
                //     return column.innerText
                // });
            })
        }));
        let processed=[];
        processed['script']=companyScript;
        processed['name']=bankName;
        processed['sector']="";
        processed['shares_outstanding']="";
        processed['market_price']="";
        processed['percent_change']="";
        processed['last_traded_on']="";
        processed['52_weeks_high_low']="";
        processed['120_day_average']="";
        processed['1_year_yield']="";
        processed['eps']="";
        processed['pe_ratio']="";
        processed['book_value']="";
        processed['pbv']="";
        processed['dividend']="";
        processed['bonus']="";
        processed['30_day_avg_volume']="";
        processed['market_capitalization']="";

        data.forEach(tbody => {
            if(tbody[0]){            
                tbody[0].forEach(row => {
                    if(row.heading == "Sector"){
                        processed['sector']=row.value.replaceAll(',','');
                    }
                    if(row.heading == "Shares Outstanding"){
                        processed['shares_outstanding']=row.value.replaceAll(',','');
                    }
                    if(row.heading == "Market Price"){
                        processed['market_price']=row.value.replaceAll(',','');
                    }
                    if(row.heading == "% Change"){
                        processed['percent_change']=row.value.replaceAll(',','');
                    }
                    if(row.heading == "Last Traded On"){
                        processed['last_traded_on']=row.value.replaceAll(',','');
                    }
                    if(row.heading == "52 Weeks High - Low"){
                        processed['52_weeks_high_low']=row.value.replaceAll(',','');
                    }
                    if(row.heading == "120 Day Average"){
                        processed['120_day_average']=row.value.replaceAll(',','');
                    }
                    if(row.heading == "1 Year Yield"){
                        processed['1_year_yield']=row.value.replaceAll(',','');
                    }
                    if(row.heading == "EPS"){
                        const eps=row.value.replaceAll(',','');
                        const cropped=eps.substr(0,eps.indexOf(" "));
                        processed['eps']=cropped;
                    }
                    if(row.heading == "P/E Ratio"){
                        processed['pe_ratio']=row.value.replaceAll(',','');
                    }
                    if(row.heading == "Book Value"){
                        processed['book_value']=row.value.replaceAll(',','');
                    }
                    if(row.heading == "PBV"){
                        processed['pbv']=row.value.replaceAll(',','');
                    }
                    if(row.heading == "% Dividend"){
                        const dividend=row.value.replaceAll(',','');
                        const cropped=dividend.substr(0,dividend.indexOf(" "));
                        processed['dividend']=cropped;
                    }
                    if(row.heading == "% Bonus"){
                        const bonus=row.value.replaceAll(',','');
                        const cropped=bonus.substr(0,bonus.indexOf(" "));
                        processed['bonus']=cropped;
                    }
                    if(row.heading == "30-Day Avg Volume"){
                        processed['30_day_avg_volume']=row.value.replaceAll(',','');
                    }
                    if(row.heading == "Market Capitalization"){
                        processed['market_capitalization']=row.value.replaceAll(',','');
                    }
                });
            }
        });
        csv+="\n"+Object.values(processed).join(",");
        console.log(`Completed script ${companyScript}`);
        
        // console.log(companyScript,marketPrice);
    }
    browser.close();
    const endTime=moment();
    const diff=moment.duration(endTime.diff(startTime));
    console.log(`Process completed in ${diff.humanize(true)}`);
    // console.log(csv);

    fs.writeFile(new Date().toJSON().slice(0,10)+".csv", csv,function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}
run();