document.getElementById("indexForm")?.addEventListener("submit", function (e) {
e.preventDefault();

const url = document.getElementById("urlInput").value;
const message = document.getElementById("message");
const result = document.getElementById("result");

if (!url.startsWith("http")) {
message.innerHTML = "❌ Error: Please enter a valid URL.";
message.className = "error";
result.innerHTML = "";
return;
}

message.innerHTML = "✅ Success! URL submitted successfully.";
message.className = "success";

result.innerHTML = `
<h3>Result: Not Indexed</h3>
<p><strong>Meaning:</strong> Google has not indexed this page yet.</p>
<p><strong>What to do:</strong></p>
<ol>
<li>Submit sitemap in Google Search Console</li>
<li>Request indexing</li>
<li>Add unique content</li>
</ol>
`;
});
