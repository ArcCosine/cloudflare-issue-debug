import { Hono } from "hono";
import { isAuthed, createCmacSign } from "../utils";

const API_ENTRY = "http://localhost:9999/";

// Entry Point
const app = new Hono();
app.get("/test", async (c) => {
    const request = {
        history: btoa("cf_sesame_open"),
    };
    const result = await fetch(`${API_ENTRY}/cmd`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(request),
    });
    const json = await result.json();
    c.text(json);
});

export { app };
