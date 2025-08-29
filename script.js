function checkAnswers() {
    let score = 0;
    const totalQuestions = 14; // Total number of questions

    // Get student name
    const studentName = document.getElementById("studentName").value;
    document.getElementById("displayName").innerText = `Student Name: ${studentName}`;

    // Question 1
    if (document.getElementById("EnableExplainbestmodel").checked) {
        score += 5;
    }

    // Question 2
    const question2Answer = document.getElementById("question2").value;
    if (question2Answer === "reliability and safety") {
        score += 5;
    }

    // Question 3
    if (document.querySelector('input[name="workloadAI"]:checked')?.value === "Artificial Intelligence") {
        score += 5;
    }

    // Question 4
    if (document.querySelector('input[name="train"]:checked')?.value === "VALUE2") {
        score += 5;
    }

    // Question 5
    const question5Answer = document.getElementById("question5").value;
    if (question5Answer === "Positive") {
        score += 5;
   }

    // Question 6 (Select two)
    const q6Selected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    if (q6Selected.includes("Image classication") && q6Selected.includes("R")) {
        score += 5;
    }

    // Question 6
    const question7Answer = document.getElementById("question7").value;
    if (question7Answer === "OCR") {
        score += 5;
    }

    // Question 8
    const question8Answer = document.getElementById("question8").value;
    if (question8Answer === "inclusiveness") {
        score += 5;
    }

    // Question 9
    if (document.querySelector('input[name="AI"]:checked')?.value === "RNN") {
        score += 5;
    }

    // Question 10
    if (document.querySelector('input[name="images"]:checked')?.value === "Assign a label to each pixel in the image") {
        score += 5;
    }
 // Question 10
    if (document.querySelector('input[name="At"]:checked')?.value === "Building AI systems that require no human oversight") {
        score += 5;
    }
   
    const resultPage = `result.html?name=${encodeURIComponent(studentName)}&marks=${encodeURIComponent(score)}`;
    window.location.href = resultPage;
}


   // Display result
   // document.getElementById("result").innerText = `You scored ${score} out of ${totalQuestions * 5}`;
    