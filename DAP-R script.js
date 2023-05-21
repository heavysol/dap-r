/* Created on 30 Nov '21 */

/* 13 Jan '23: LEARN PHP OR SOME OTHER BACKEND LANG SO I CAN STORE THIS FORM'S RESULTS IN A DATABASE */

// Start
var containFear = 0;
var containAvoid = 0;
var containNeu = 0;
var containApp = 0;
var containEsc = 0;

var formerVar = `<form>
<h3> 1. Death is no doubt a grim experience. </h3> 
<input type = 'radio' value = 1 name = 'Q1'> SD <br>
<input type = 'radio' value = 2 name = 'Q1'> D <br>
<input type = 'radio' value = 3 name = 'Q1'> MD <br>
<input type = 'radio' value = 4 name = 'Q1'> U <br>
<input type = 'radio' value = 5 name = 'Q1'> MA <br>
<input type = 'radio' value = 6 name = 'Q1'> A <br>
<input type = 'radio' value = 7 name = 'Q1'> SA <br>

<br>

<h3> 2. The prospects of my own death arouses anxiety in me. </h3>
<input type = 'radio' value = 1 name = 'Q2'> SD <br>
<input type = 'radio' value = 2 name = 'Q2'> D <br>
<input type = 'radio' value = 3 name = 'Q2'> MD <br>
<input type = 'radio' value = 4 name = 'Q2'> U <br>
<input type = 'radio' value = 5 name = 'Q2'> MA <br>
<input type = 'radio' value = 6 name = 'Q2'> A <br>
<input type = 'radio' value = 7 name = 'Q2'> SA <br>

<br>

<h3> 3. I avoid death thoughts at all costs. </h3>
<input type = 'radio' value = 1 name = 'Q3'> SD <br>
<input type = 'radio' value = 2 name = 'Q3'> D <br>
<input type = 'radio' value = 3 name = 'Q3'> MD <br>
<input type = 'radio' value = 4 name = 'Q3'> U <br>
<input type = 'radio' value = 5 name = 'Q3'> MA <br>
<input type = 'radio' value = 6 name = 'Q3'> A <br>
<input type = 'radio' value = 7 name = 'Q3'> SA <br>

<br>

<h3> 4. I believe that I will be in heaven after I die </h3>
<input type = 'radio' value = 1 name = 'Q4'> SD <br>
<input type = 'radio' value = 2 name = 'Q4'> D <br>
<input type = 'radio' value = 3 name = 'Q4'> MD <br>
<input type = 'radio' value = 4 name = 'Q4'> U <br>
<input type = 'radio' value = 5 name = 'Q4'> MA <br>
<input type = 'radio' value = 6 name = 'Q4'> A <br>
<input type = 'radio' value = 7 name = 'Q4'> SA <br>

<br>

<h3> 5. Death will bring an end to all my troubles </h3>
<input type = 'radio' value = 1 name = 'Q5'> SD <br>
<input type = 'radio' value = 2 name = 'Q5'> D <br>
<input type = 'radio' value = 3 name = 'Q5'> MD <br>
<input type = 'radio' value = 4 name = 'Q5'> U <br>
<input type = 'radio' value = 5 name = 'Q5'> MA <br>
<input type = 'radio' value = 6 name = 'Q5'> A <br>
<input type = 'radio' value = 7 name = 'Q5'> SA <br>

<br>

<h3> 6. Death should be viewed as a natural, undeniable, and unavoidable event. </h3>
<input type = 'radio' value = 1 name = 'Q6'> SD <br>
<input type = 'radio' value = 2 name = 'Q6'> D <br>
<input type = 'radio' value = 3 name = 'Q6'> MD <br>
<input type = 'radio' value = 4 name = 'Q6'> U <br>
<input type = 'radio' value = 5 name = 'Q6'> MA <br>
<input type = 'radio' value = 6 name = 'Q6'> A <br>
<input type = 'radio' value = 7 name = 'Q6'> SA <br>

<br>

<h3> 7. I am disturbed by the finality of death. </h3>
<input type = 'radio' value = 1 name = 'Q7'> SD <br>
<input type = 'radio' value = 2 name = 'Q7'> D <br>
<input type = 'radio' value = 3 name = 'Q7'> MD <br>
<input type = 'radio' value = 4 name = 'Q7'> U <br>
<input type = 'radio' value = 5 name = 'Q7'> MA <br>
<input type = 'radio' value = 6 name = 'Q7'> A <br>
<input type = 'radio' value = 7 name = 'Q7'> SA <br>

<br>

<h3> 8. Death is an entrance to a place of ultimate satisfaction </h3>
<input type = 'radio' value = 1 name = 'Q8'> SD <br>
<input type = 'radio' value = 2 name = 'Q8'> D <br>
<input type = 'radio' value = 3 name = 'Q8'> MD <br>
<input type = 'radio' value = 4 name = 'Q8'> U <br>
<input type = 'radio' value = 5 name = 'Q8'> MA <br>
<input type = 'radio' value = 6 name = 'Q8'> A <br>
<input type = 'radio' value = 7 name = 'Q8'> SA <br>


<br>

<h3> 9. Death provides an escape from this terrible world </h3>
<input type = 'radio' value = 1 name = 'Q9'> SD <br>
<input type = 'radio' value = 2 name = 'Q9'> D <br>
<input type = 'radio' value = 3 name = 'Q9'> MD <br>
<input type = 'radio' value = 4 name = 'Q9'> U <br>
<input type = 'radio' value = 5 name = 'Q9'> MA <br>
<input type = 'radio' value = 6 name = 'Q9'> A <br>
<input type = 'radio' value = 7 name = 'Q9'> SA <br>

<br>

<h3> 10. Whenever the thought of death enters my mind, I try to push it away. </h3>
<input type = 'radio' value = 1 name = 'Q10'> SD <br>
<input type = 'radio' value = 2 name = 'Q10'> D <br>
<input type = 'radio' value = 3 name = 'Q10'> MD <br>
<input type = 'radio' value = 4 name = 'Q10'> U <br>
<input type = 'radio' value = 5 name = 'Q10'> MA <br>
<input type = 'radio' value = 6 name = 'Q10'> A <br>
<input type = 'radio' value = 7 name = 'Q10'> SA <br>

<br>

<h3> 11. Death is deliverance from pain and suffering </h3>
<input type = 'radio' value = 1 name = 'Q11'> SD <br>
<input type = 'radio' value = 2 name = 'Q11'> D <br>
<input type = 'radio' value = 3 name = 'Q11'> MD <br>
<input type = 'radio' value = 4 name = 'Q11'> U <br>
<input type = 'radio' value = 5 name = 'Q11'> MA <br>
<input type = 'radio' value = 6 name = 'Q11'> A <br>
<input type = 'radio' value = 7 name = 'Q11'> SA <br>

<br>

<h3> 12. I always try not to think about death. </h3>
<input type = 'radio' value = 1 name = 'Q12'> SD <br>
<input type = 'radio' value = 2 name = 'Q12'> D <br>
<input type = 'radio' value = 3 name = 'Q12'> MD <br>
<input type = 'radio' value = 4 name = 'Q12'> U <br>
<input type = 'radio' value = 5 name = 'Q12'> MA <br>
<input type = 'radio' value = 6 name = 'Q12'> A <br>
<input type = 'radio' value = 7 name = 'Q12'> SA <br>

<br>

<h3> 13. I believe that heaven will be a much better place than this world </h3>
<input type = 'radio' value = 1 name = 'Q13'> SD <br>
<input type = 'radio' value = 2 name = 'Q13'> D <br>
<input type = 'radio' value = 3 name = 'Q13'> MD <br>
<input type = 'radio' value = 4 name = 'Q13'> U <br>
<input type = 'radio' value = 5 name = 'Q13'> MA <br>
<input type = 'radio' value = 6 name = 'Q13'> A <br>
<input type = 'radio' value = 7 name = 'Q13'> SA <br>

<br>

<h3> 14. Death is a natural aspect of life. </h3>
<input type = 'radio' value = 1 name = 'Q14'> SD <br>
<input type = 'radio' value = 2 name = 'Q14'> D <br>
<input type = 'radio' value = 3 name = 'Q14'> MD <br>
<input type = 'radio' value = 4 name = 'Q14'> U <br>
<input type = 'radio' value = 5 name = 'Q14'> MA <br>
<input type = 'radio' value = 6 name = 'Q14'> A <br>
<input type = 'radio' value = 7 name = 'Q14'> SA <br>

<br>

<h3> 15. Death is a union with God and eternal bliss. </h3>
<input type = 'radio' value = 1 name = 'Q15'> SD <br>
<input type = 'radio' value = 2 name = 'Q15'> D <br>
<input type = 'radio' value = 3 name = 'Q15'> MD <br>
<input type = 'radio' value = 4 name = 'Q15'> U <br>
<input type = 'radio' value = 5 name = 'Q15'> MA <br>
<input type = 'radio' value = 6 name = 'Q15'> A <br>
<input type = 'radio' value = 7 name = 'Q15'> SA <br>

<br>

<h3> 16. Death brings a promise of a new and glorious life</h3>
<input type = 'radio' value = 1 name = 'Q16'> SD <br>
<input type = 'radio' value = 2 name = 'Q16'> D <br>
<input type = 'radio' value = 3 name = 'Q16'> MD <br>
<input type = 'radio' value = 4 name = 'Q16'> U <br>
<input type = 'radio' value = 5 name = 'Q16'> MA <br>
<input type = 'radio' value = 6 name = 'Q16'> A <br>
<input type = 'radio' value = 7 name = 'Q16'> SA <br>

<br>

<h3>17. I would neither fear death nor welcome it.</h3>
<input type = 'radio' value = 1 name = 'Q17'> SD <br>
<input type = 'radio' value = 2 name = 'Q17'> D <br>
<input type = 'radio' value = 3 name = 'Q17'> MD <br>
<input type = 'radio' value = 4 name = 'Q17'> U <br>
<input type = 'radio' value = 5 name = 'Q17'> MA <br>
<input type = 'radio' value = 6 name = 'Q17'> A <br>
<input type = 'radio' value = 7 name = 'Q17'> SA <br>

<br>

<h3>18. I have an intense fear of death.</h3>
<input type = 'radio' value = 1 name = 'Q18'> SD <br>
<input type = 'radio' value = 2 name = 'Q18'> D <br>
<input type = 'radio' value = 3 name = 'Q18'> MD <br>
<input type = 'radio' value = 4 name = 'Q18'> U <br>
<input type = 'radio' value = 5 name = 'Q18'> MA <br>
<input type = 'radio' value = 6 name = 'Q18'> A <br>
<input type = 'radio' value = 7 name = 'Q18'> SA <br>

<br>

<h3>19. I avoid thinking about death altogether</h3>
<input type = 'radio' value = 1 name = 'Q19'> SD <br>
<input type = 'radio' value = 2 name = 'Q19'> D <br>
<input type = 'radio' value = 3 name = 'Q19'> MD <br>
<input type = 'radio' value = 4 name = 'Q19'> U <br>
<input type = 'radio' value = 5 name = 'Q19'> MA <br>
<input type = 'radio' value = 6 name = 'Q19'> A <br>
<input type = 'radio' value = 7 name = 'Q19'> SA <br>

<br>

<h3>20. The subject of life after death troubles me greatly. </h3>
<input type = 'radio' value = 1 name = 'Q20'> SD <br>
<input type = 'radio' value = 2 name = 'Q20'> D <br>
<input type = 'radio' value = 3 name = 'Q20'> MD <br>
<input type = 'radio' value = 4 name = 'Q20'> U <br>
<input type = 'radio' value = 5 name = 'Q20'> MA <br>
<input type = 'radio' value = 6 name = 'Q20'> A <br>
<input type = 'radio' value = 7 name = 'Q20'> SA <br>

<br>

<h3>21. The fact that death will mean the end of everything as I know it frightens me.</h3>
<input type = 'radio' value = 1 name = 'Q21'> SD <br>
<input type = 'radio' value = 2 name = 'Q21'> D <br>
<input type = 'radio' value = 3 name = 'Q21'> MD <br>
<input type = 'radio' value = 4 name = 'Q21'> U <br>
<input type = 'radio' value = 5 name = 'Q21'> MA <br>
<input type = 'radio' value = 6 name = 'Q21'> A <br>
<input type = 'radio' value = 7 name = 'Q21'> SA <br>

<br>

<h3> 22. I look forward to a reunion with my loved ones after I die</h3>
<input type = 'radio' value = 1 name = 'Q22'> SD <br>
<input type = 'radio' value = 2 name = 'Q22'> D <br>
<input type = 'radio' value = 3 name = 'Q22'> MD <br>
<input type = 'radio' value = 4 name = 'Q22'> U <br>
<input type = 'radio' value = 5 name = 'Q22'> MA <br>
<input type = 'radio' value = 6 name = 'Q22'> A <br>
<input type = 'radio' value = 7 name = 'Q22'> SA <br>

<br>

<h3>23. I view death as a relief from earthly suffering</h3>
<input type = 'radio' value = 1 name = 'Q23'> SD <br>
<input type = 'radio' value = 2 name = 'Q23'> D <br>
<input type = 'radio' value = 3 name = 'Q23'> MD <br>
<input type = 'radio' value = 4 name = 'Q23'> U <br>
<input type = 'radio' value = 5 name = 'Q23'> MA <br>
<input type = 'radio' value = 6 name = 'Q23'> A <br>
<input type = 'radio' value = 7 name = 'Q23'> SA <br>

<br>

<h3>24. Death is simply a part of the process of life</h3>
<input type = 'radio' value = 1 name = 'Q24'> SD <br>
<input type = 'radio' value = 2 name = 'Q24'> D <br>
<input type = 'radio' value = 3 name = 'Q24'> MD <br>
<input type = 'radio' value = 4 name = 'Q24'> U <br>
<input type = 'radio' value = 5 name = 'Q24'> MA <br>
<input type = 'radio' value = 6 name = 'Q24'> A <br>
<input type = 'radio' value = 7 name = 'Q24'> SA <br>

<br>

<h3>25. I see death as a passage to an eternal and blessed place. </h3>
<input type = 'radio' value = 1 name = 'Q25'> SD <br>
<input type = 'radio' value = 2 name = 'Q25'> D <br>
<input type = 'radio' value = 3 name = 'Q25'> MD <br>
<input type = 'radio' value = 4 name = 'Q25'> U <br>
<input type = 'radio' value = 5 name = 'Q25'> MA <br>
<input type = 'radio' value = 6 name = 'Q25'> A <br>
<input type = 'radio' value = 7 name = 'Q25'> SA <br>

<br>

<h3>26. I try to have nothing to do with the subject of death. </h3>
<input type = 'radio' value = 1 name = 'Q26'> SD <br>
<input type = 'radio' value = 2 name = 'Q26'> D <br>
<input type = 'radio' value = 3 name = 'Q26'> MD <br>
<input type = 'radio' value = 4 name = 'Q26'> U <br>
<input type = 'radio' value = 5 name = 'Q26'> MA <br>
<input type = 'radio' value = 6 name = 'Q26'> A <br>
<input type = 'radio' value = 7 name = 'Q26'> SA <br>

<br>

<h3>27. Death offers a wonderful release of the soul</h3>
<input type = 'radio' value = 1 name = 'Q27'> SD <br>
<input type = 'radio' value = 2 name = 'Q27'> D <br>
<input type = 'radio' value = 3 name = 'Q27'> MD <br>
<input type = 'radio' value = 4 name = 'Q27'> U <br>
<input type = 'radio' value = 5 name = 'Q27'> MA <br>
<input type = 'radio' value = 6 name = 'Q27'> A <br>
<input type = 'radio' value = 7 name = 'Q27'> SA <br>

<br>

<h3>28. One thing that gives me comfort in facing death is my belief in the afterlife</h3>
<input type = 'radio' value = 1 name = 'Q28'> SD <br>
<input type = 'radio' value = 2 name = 'Q28'> D <br>
<input type = 'radio' value = 3 name = 'Q28'> MD <br>
<input type = 'radio' value = 4 name = 'Q28'> U <br>
<input type = 'radio' value = 5 name = 'Q28'> MA <br>
<input type = 'radio' value = 6 name = 'Q28'> A <br>
<input type = 'radio' value = 7 name = 'Q28'> SA <br>

<br>

<h3> 29. I see death as a relief from the burden of this life.</h3>
<input type = 'radio' value = 1 name = 'Q29'> SD <br>
<input type = 'radio' value = 2 name = 'Q29'> D <br>
<input type = 'radio' value = 3 name = 'Q29'> MD <br>
<input type = 'radio' value = 4 name = 'Q29'> U <br>
<input type = 'radio' value = 5 name = 'Q29'> MA <br>
<input type = 'radio' value = 6 name = 'Q29'> A <br>
<input type = 'radio' value = 7 name = 'Q29'> SA <br>

<br>

<h3>30. Death is neither good nor bad.</h3>
<input type = 'radio' value = 1 name = 'Q30'> SD <br>
<input type = 'radio' value = 2 name = 'Q30'> D <br>
<input type = 'radio' value = 3 name = 'Q30'> MD <br>
<input type = 'radio' value = 4 name = 'Q30'> U <br>
<input type = 'radio' value = 5 name = 'Q30'> MA <br>
<input type = 'radio' value = 6 name = 'Q30'> A <br>
<input type = 'radio' value = 7 name = 'Q30'> SA <br>

<br>

<h3>31. I look forward to life after death</h3>
<input type = 'radio' value = 1 name = 'Q31'> SD <br>
<input type = 'radio' value = 2 name = 'Q31'> D <br>
<input type = 'radio' value = 3 name = 'Q31'> MD <br>
<input type = 'radio' value = 4 name = 'Q31'> U <br>
<input type = 'radio' value = 5 name = 'Q31'> MA <br>
<input type = 'radio' value = 6 name = 'Q31'> A <br>
<input type = 'radio' value = 7 name = 'Q31'> SA <br>

<br>

<h3>32. The uncertainty of not knowing what happens after death worries me. </h3>
<input type = 'radio' value = 1 name = 'Q32'> SD <br>
<input type = 'radio' value = 2 name = 'Q32'> D <br>
<input type = 'radio' value = 3 name = 'Q32'> MD <br>
<input type = 'radio' value = 4 name = 'Q32'> U <br>
<input type = 'radio' value = 5 name = 'Q32'> MA <br>
<input type = 'radio' value = 6 name = 'Q32'> A <br>
<input type = 'radio' value = 7 name = 'Q32'> SA <br>
</form>`

var introText = '<br>' + '<button onclick="start()"> Start </button>';
document.getElementById('intro').innerHTML = introText;
document.getElementById('ret').style.visibility = 'hidden';
//document.getElementsByClassName('tag').style.visibility = 'hidden';

function start() {document.getElementById('intro').innerHTML = '<button onclick = "retourner()"> Return </button>';
                  document.getElementById('former').innerHTML = formerVar;
                  document.getElementById('ret').style.visibility = 'visible';
                  if (containFear > 0) {containFear = 0; document.getElementById('resultFear').innerHTML = containFear;}
                  if (containAvoid > 0) {containAvoid = 0; document.getElementById('resultAvoid').innerHTML = containAvoid;}
                  if (containNeu > 0) {containNeu = 0; document.getElementById('resultNeu').innerHTML = containNeu;}
                  if (containApp > 0) {containApp = 0; document.getElementById('resultApp').innerHTML = containApp;}
                  if (containEsc > 0) {containEsc = 0; document.getElementById('resultEsc').innerHTML = containEsc;}}

function retourner() {document.getElementById('intro').innerHTML = introText;
                      document.getElementById('former').innerHTML = ' ';
                      document.getElementById('resultFear').innerHTML = ' ';
                      document.getElementById('resultAvoid').innerHTML = ' ';
                      document.getElementById('resultNeu').innerHTML = ' ';
                      document.getElementById('resultApp').innerHTML = ' ';
                      document.getElementById('resultEsc').innerHTML = ' ';
                      document.getElementById('ret').style.visibility = 'hidden';
                      //document.getElementsByClassName('tag').style.visibility = 'hidden';
                    }

// Values
document.getElementById('resultFear').innerHTML = containFear; 
document.getElementById('resultFear').innerHTML = ' ';

document.getElementById('resultAvoid').innerHTML = containAvoid; 
document.getElementById('resultAvoid').innerHTML = ' ';

document.getElementById('resultNeu').innerHTML = containNeu;
document.getElementById('resultNeu').innerHTML = ' ';

document.getElementById('resultApp').innerHTML = containApp;
document.getElementById('resultApp').innerHTML = ' ';

document.getElementById('resultEsc').innerHTML = containEsc;
document.getElementById('resultEsc').innerHTML = ' ';

function count() {/* Fear of death */ 
                  var ele1 = document.getElementsByName('Q1');
                  for (i = 0; i < ele1.length; i++) {if (ele1[i].checked) {containFear += parseInt(ele1[i].value); document.getElementById('resultFear').innerHTML = containFear; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}

                  var ele2 = document.getElementsByName('Q2');
                  for (i2 = 0; i2 < ele2.length; i2++) {if (ele2[i2].checked) {containFear += parseInt(ele2[i2].value); document.getElementById('resultFear').innerHTML = containFear; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
                
                  var ele7 = document.getElementsByName('Q7');
                  for (i7 = 0; i7 < ele7.length; i7++) {if (ele7[i7].checked) {containFear += parseInt(ele7[i7].value); document.getElementById('resultFear').innerHTML = containFear; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
                
                  var ele18 = document.getElementsByName('Q18');
                  for (i18 = 0; i18 < ele18.length; i18++) {if (ele18[i18].checked) {containFear += parseInt(ele18[i18].value); document.getElementById('resultFear').innerHTML = containFear; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
                
                  var ele20 = document.getElementsByName('Q20');
                  for (i20 = 0; i20 < ele20.length; i20++) {if (ele20[i20].checked) {containFear += parseInt(ele20[i20].value); document.getElementById('resultFear').innerHTML = containFear; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
                
                  var ele21 = document.getElementsByName('Q21');
                  for (i21 = 0; i21 < ele21.length; i21++) {if (ele21[i21].checked) {containFear += parseInt(ele21[i21].value); document.getElementById('resultFear').innerHTML = containFear; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
                
                  var ele32 = document.getElementsByName('Q32');
                  for (i32 = 0; i32 < ele32.length; i32++) {if (ele32[i32].checked) {containFear += parseInt(ele32[i32].value); document.getElementById('resultFear').innerHTML = Math.round(containFear / 7); document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';
                  document.getElementById('resultFear').innerHTML = containFear;}}
                
                /* Death avoidance */
                var ele3 = document.getElementsByName('Q3');
                for (i3 = 0; i3 < ele3.length; i3++) {if (ele3[i3].checked) {containAvoid += parseInt(ele3[i3].value); document.getElementById('resultAvoid').innerHTML = containAvoid; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}

                var ele10 = document.getElementsByName('Q10');
                for (i10 = 0; i10 < ele10.length; i10++) {if (ele10[i10].checked) {containAvoid += parseInt(ele10[i10].value); document.getElementById('resultAvoid').innerHTML = containAvoid; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
              
                var ele12 = document.getElementsByName('Q12');
                for (i12 = 0; i12 < ele12.length; i12++) {if (ele12[i12].checked) {containAvoid += parseInt(ele12[i12].value); document.getElementById('resultAvoid').innerHTML = containAvoid; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
              
                var ele19 = document.getElementsByName('Q19');
                for (i19 = 0; i19 < ele19.length; i19++) {if (ele19[i19].checked) {containAvoid += parseInt(ele19[i19].value); document.getElementById('resultAvoid').innerHTML = containAvoid; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
              
                var ele26 = document.getElementsByName('Q26');
                for (i26 = 0; i26 < ele26.length; i26++) {if (ele26[i26].checked) {containAvoid += parseInt(ele26[i26].value); document.getElementById('resultAvoid').innerHTML = Math.round(containAvoid / 5); document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';
                document.getElementById('resultAvoid').innerHTML = containAvoid;}}
            
            /* Neutral acceptance */
            var ele6 = document.getElementsByName('Q6');
            for (i6 = 0; i6 < ele6.length; i6++) {if (ele6[i6].checked) {containNeu += parseInt(ele6[i6].value); document.getElementById('resultNeu').innerHTML = containNeu; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}

            var ele14 = document.getElementsByName('Q14');
            for (i14 = 0; i14 < ele14.length; i14++) {if (ele14[i14].checked) {containNeu += parseInt(ele14[i14].value); document.getElementById('resultNeu').innerHTML = containNeu; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
          
            var ele17 = document.getElementsByName('Q17');
            for (i17 = 0; i17 < ele17.length; i17++) {if (ele17[i17].checked) {containNeu += parseInt(ele17[i17].value); document.getElementById('resultNeu').innerHTML = containNeu; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
          
            var ele24 = document.getElementsByName('Q24');
            for (i24 = 0; i24 < ele24.length; i24++) {if (ele24[i24].checked) {containNeu += parseInt(ele24[i24].value); document.getElementById('resultNeu').innerHTML = containNeu; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
          
            var ele30 = document.getElementsByName('Q26');
            for (i30 = 0; i30 < ele30.length; i30++) {if (ele30[i30].checked) {containNeu += parseInt(ele30[i30].value); document.getElementById('resultNeu').innerHTML = Math.round(containNeu / 5); document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}
            document.getElementById('resultNeu').innerHTML = containNeu;}
                
            /* Approach acceptance */
            var ele4 = document.getElementsByName('Q4');
            for (i4 = 0; i4 < ele4.length; i4++) {if (ele4[i4].checked) {containApp += parseInt(ele4[i4].value); document.getElementById('resultApp').innerHTML = containApp; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}

            var ele8 = document.getElementsByName('Q8');
            for (i8 = 0; i8 < ele8.length; i8++) {if (ele8[i8].checked) {containApp += parseInt(ele8[i8].value); document.getElementById('resultApp').innerHTML = containApp; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
          
            var ele13 = document.getElementsByName('Q13');
            for (i13 = 0; i13 < ele13.length; i13++) {if (ele13[i13].checked) {containApp += parseInt(ele13[i13].value); document.getElementById('resultApp').innerHTML = containApp; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
          
            var ele15 = document.getElementsByName('Q15');
            for (i15 = 0; i15 < ele15.length; i15++) {if (ele15[i15].checked) {containApp += parseInt(ele15[i15].value); document.getElementById('resultApp').innerHTML = containApp; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
          
            var ele16 = document.getElementsByName('Q16');
            for (i16 = 0; i16 < ele16.length; i16++) {if (ele16[i16].checked) {containApp += parseInt(ele16[i16].value); document.getElementById('resultApp').innerHTML = containApp; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
            var ele4 = document.getElementsByName('Q4');
            for (i4 = 0; i4 < ele4.length; i4++) {if (ele4[i4].checked) {containApp += parseInt(ele4[i4].value); document.getElementById('resultApp').innerHTML = containApp; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}

            var ele22 = document.getElementsByName('Q22');
            for (i22 = 0; i22 < ele22.length; i22++) {if (ele22[i22].checked) {containApp += parseInt(ele22[i22].value); document.getElementById('resultApp').innerHTML = containApp; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
          
            var ele25 = document.getElementsByName('Q25');
            for (i25 = 0; i25 < ele25.length; i25++) {if (ele25[i25].checked) {containApp += parseInt(ele25[i25].value); document.getElementById('resultApp').innerHTML = containApp; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
          
            var ele27 = document.getElementsByName('Q27');
            for (i27 = 0; i27 < ele27.length; i27++) {if (ele27[i27].checked) {containApp += parseInt(ele27[i27].value); document.getElementById('resultApp').innerHTML = containApp; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
          
            var ele28 = document.getElementsByName('Q28');
            for (i28 = 0; i28 < ele28.length; i28++) {if (ele28[i28].checked) {containApp += parseInt(ele28[i28].value); document.getElementById('resultApp').innerHTML = containApp; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}

            var ele31 = document.getElementsByName('Q31');
            for (i31 = 0; i31 < ele31.length; i31++) {if (ele31[i31].checked) {containApp += parseInt(ele31[i31].value); document.getElementById('resultApp').innerHTML = Math.round(containApp / 10); document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}
            document.getElementById('resultApp').innerHTML = containApp;} 
        
            /* Escape acceptance */
            var ele5 = document.getElementsByName('Q5');
            for (i5 = 0; i5 < ele5.length; i5++) {if (ele5[i5].checked) {containEsc += parseInt(ele5[i5].value); document.getElementById('resultEsc').innerHTML = containEsc; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
        
            var ele9 = document.getElementsByName('Q9');
            for (i9 = 0; i9 < ele9.length; i9++) {if (ele9[i9].checked) {containEsc += parseInt(ele9[i9].value); document.getElementById('resultEsc').innerHTML = containEsc; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
        
            var ele11 = document.getElementsByName('Q11');
            for (i11 = 0; i11 < ele11.length; i11++) {if (ele11[i11].checked) {containEsc += parseInt(ele11[i11].value); document.getElementById('resultEsc').innerHTML = containEsc; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
        
            var ele23 = document.getElementsByName('Q23');
            for (i23 = 0; i23 < ele23.length; i23++) {if (ele23[i23].checked) {containEsc += parseInt(ele23[i23].value); document.getElementById('resultEsc').innerHTML = containEsc; document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
        
            var ele29 = document.getElementsByName('Q29');
            for (i29 = 0; i29 < ele5.length; i29++) {if (ele29[i29].checked) {containEsc += parseInt(ele29[i29].value); document.getElementById('resultEsc').innerHTML = Math.round(containEsc / 5); document.getElementById('former').innerHTML = ' '; document.getElementById('ret').style.visibility = 'hidden';}}
            document.getElementById('resultEsc').innerHTML = containEscinnerHTML = ' ';
        
            //document.getElementsByClassName('tag').style.visibility = 'visible';
        }