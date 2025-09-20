"use client";
import React, { useRef, useState } from "react";

const themeVars = {
  background: "var(--background, #f9fafb)",
  card: "var(--card, #fff)",
  border: "var(--border, #e5e7eb)",
  foreground: "var(--foreground, #222)",
  accent: "var(--accent, #0056b3)",
  accentForeground: "var(--accent-foreground, #fff)",
  accentMuted: "var(--accent-muted, #b3d0f7)",
  accentHover: "var(--accent-hover, #003d7a)",
  cardMuted: "var(--card-muted, #f0f0f0)",
  cardAlt: "var(--card-alt, #eaf4ff)"
};

export default function AnalyzePage() {
  const [response, setResponse] = useState("");
  const [answer, setAnswer] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isAsking, setIsAsking] = useState(false);
  const [contractContext, setContractContext] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const questionInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAnswer("");
    if (!fileInputRef.current?.files?.length) {
      setResponse("Error: Please select a file first.");
      return;
    }
    setIsUploading(true);
    setResponse("Uploading and processing your document...");
    const formData = new FormData();
    formData.append("file", fileInputRef.current.files[0]);
    try {
      const res = await fetch("http://localhost:3000/analyze", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setContractContext(data.rawText);
    } catch (err: any) {
      setResponse(`An error occurred: ${err.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const handleAsk = async () => {
    const question = questionInputRef.current?.value || "";
    if (!question) {
      setAnswer("Error: Please type a question first.");
      return;
    }
    if (!contractContext) {
      setAnswer("Error: Please analyze a document first to provide context.");
      return;
    }
    setIsAsking(true);
    setAnswer("Thinking...");
    try {
      const res = await fetch("http://localhost:3000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, context: contractContext })
      });
      if (!res.ok) {
        throw new Error(`Server error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setAnswer(data.answer);
    } catch (err: any) {
      setAnswer(`An error occurred: ${err.message}`);
    } finally {
      setIsAsking(false);
    }
  };

  return (
    <div style={{ background: themeVars.background, minHeight: "100vh", color: themeVars.foreground }}>
      <div
        style={{
          maxWidth: 540,
          margin: "2rem auto",
          background: themeVars.card,
          borderRadius: "1rem",
          boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          padding: "2.5rem 2rem",
          border: `1px solid ${themeVars.border}`
        }}
      >
        <h2 style={{ color: themeVars.accent, fontWeight: "bold", marginBottom: "1rem", letterSpacing: "-0.01em", fontSize: "1.35rem" }}>
          Upload a PDF to <span style={{ color: themeVars.accent }}> /analyze </span>
        </h2>
        <form onSubmit={handleUpload} encType="multipart/form-data">
          <input
            type="file"
            ref={fileInputRef}
            name="file"
            accept="application/pdf,image/*"
            style={{
              fontSize: "1rem",
              padding: "0.7rem 1rem",
              borderRadius: "0.5rem",
              border: `1px solid ${themeVars.border}`,
              background: themeVars.cardMuted,
              width: "100%",
              marginBottom: "1.2rem"
            }}
          />
          <button
            type="submit"
            disabled={isUploading}
            style={{
              fontWeight: 600,
              background: isUploading ? themeVars.accentMuted : themeVars.accent,
              color: themeVars.accentForeground,
              border: "none",
              borderRadius: "0.5rem",
              padding: "0.7rem 1.5rem",
              cursor: isUploading ? "not-allowed" : "pointer",
              transition: "background 0.2s",
              marginBottom: "1rem",
              boxShadow: "0 1px 6px rgba(0,0,0,0.07)"
            }}
          >
            {isUploading ? "Analyzing..." : "Upload & Analyze"}
          </button>
        </form>

        <h3 style={{ color: themeVars.accent, fontWeight: "bold", marginBottom: "1rem", letterSpacing: "-0.01em", fontSize: "1.2rem" }}>
          Server Response:
        </h3>
        <pre
          style={{
            background: themeVars.cardMuted,
            color: themeVars.foreground,
            padding: "1em",
            border: `1px solid ${themeVars.border}`,
            borderRadius: "0.75rem",
            fontSize: "1rem",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            minHeight: 50,
            marginBottom: "1rem"
          }}
        >
          {response}
        </pre>

        <hr style={{ border: "none", borderTop: `1px solid ${themeVars.border}`, margin: "2rem 0" }} />

        <h2 style={{ color: themeVars.accent, fontWeight: "bold", marginBottom: "1rem", letterSpacing: "-0.01em", fontSize: "1.35rem" }}>
          Ask a follow-up question
        </h2>
        <input
          type="text"
          ref={questionInputRef}
          placeholder="Type your question here..."
          style={{
            fontSize: "1rem",
            padding: "0.7rem 1rem",
            borderRadius: "0.5rem",
            border: `1px solid ${themeVars.border}`,
            background: themeVars.cardMuted,
            width: "100%",
            marginBottom: "1.2rem"
          }}
        />
        <button
          type="button"
          onClick={handleAsk}
          disabled={isAsking}
          style={{
            fontWeight: 600,
            background: isAsking ? themeVars.accentMuted : themeVars.accent,
            color: themeVars.accentForeground,
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.7rem 1.5rem",
            cursor: isAsking ? "not-allowed" : "pointer",
            transition: "background 0.2s",
            boxShadow: "0 1px 6px rgba(0,0,0,0.07)"
          }}
        >
          {isAsking ? "Asking..." : "Ask"}
        </button>

        <h3 style={{ color: themeVars.accent, fontWeight: "bold", marginBottom: "1rem", letterSpacing: "-0.01em", fontSize: "1.2rem" }}>
          Answer:
        </h3>
        <pre
          style={{
            background: themeVars.cardAlt,
            color: themeVars.foreground,
            padding: "1em",
            border: `1px solid ${themeVars.accent}`,
            borderRadius: "0.75rem",
            fontSize: "1rem",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            minHeight: 50,
            marginBottom: "1rem"
          }}
        >
          {answer}
        </pre>
      </div>
    </div>
  );
}