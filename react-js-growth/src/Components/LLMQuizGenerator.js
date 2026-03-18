import React, { useState } from "react";

export default function LLMQuizGenerator() {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [quiz, setQuiz] = useState(null);
    const [error, setError] = useState(null);
    const apiBase = process.env.REACT_APP_API_URL || '';

    async function generate() {
        setLoading(true);
        setError(null);
        setQuiz(null);
        try {
            const res = await fetch(`${apiBase}/api/generate-quiz`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content }),
            });
            const text = await res.text();
            let parsed = null;
            try { parsed = JSON.parse(text); } catch (e) { parsed = null; }
            if (!res.ok) {
                const msg = parsed?.error || text || `Status ${res.status}`;
                throw new Error(msg);
            }
            if (!parsed) {
                throw new Error("Server returned non-JSON response: " + text.slice(0, 300));
            }
            setQuiz(parsed);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h3>LLM Quiz Generator</h3>
            <p>Paste content (at least 5 characters) and click Generate to get 5 MCQs.</p>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={10}
                style={{ width: "100%" }}
                placeholder="Paste or type content here (min 5 characters)..."
            />
            <div style={{ marginTop: 8 }}>
                <button onClick={generate} disabled={loading || !content.trim()}>
                    {loading ? "Generating..." : "Generate 5 Questions"}
                </button>
            </div>

            {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}

            {quiz && Array.isArray(quiz) && (
                <div style={{ marginTop: 16 }}>
                    {quiz.map((q, i) => (
                        <div key={i} style={{ marginBottom: 12 }}>
                            <strong>{i + 1}. {q.question}</strong>
                            <ul>
                                {Object.entries(q.options || {}).map(([k, v]) => (
                                    <li key={k}>
                                        <strong>{k}.</strong> {v}
                                        {q.answer === k ? <span style={{ color: "green", marginLeft: 8 }}>(Correct)</span> : null}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {quiz && !Array.isArray(quiz) && (
                <pre style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>{JSON.stringify(quiz, null, 2)}</pre>
            )}
        </div>
    );
}