
function markAsCompleted() {
  const urlParams = new URLSearchParams(window.location.search);
  const course = urlParams.get('course') || 'unknown';
  localStorage.setItem(course, 'completed');
  alert(`Marked ${course.toUpperCase()} as completed!`);
}

window.addEventListener("DOMContentLoaded", () => {
  const progressList = document.getElementById("progress-list");
  if (progressList) {
    const courses = ['html', 'css'];
    courses.forEach(course => {
      const status = localStorage.getItem(course) === 'completed' ? "✅ Completed" : "❌ Not Started";
      const li = document.createElement("li");
      li.textContent = `${course.toUpperCase()} - ${status}`;
      progressList.appendChild(li);
    });
  }
});
