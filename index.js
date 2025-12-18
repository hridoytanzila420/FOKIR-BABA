/**
 * @author NTKhang enhanced by SABBIR HOSSEIN
 * ! The source code is written by NTKhang, please don't change the author's name everywhere. Thank you for using
 * ! Official source code: https://github.com/ntkhang03/Goat-Bot-V2
 * ! enhanced source code:
https://github.com/sabbirmaghla/SABBIR-Harny
 * ! If you do not download the source code from the above address, you are using an unknown version and at risk of having your account hacked
 *
 * English:
 * ! Please do not change the below code, it is very important for the project.
 * It is my motivation to maintain and develop the project for free.
 * ! If you change it, you will be banned forever
 * Thank you for using
 *
/**
 * Goat Bot Deployment Fix by SABBIR HOSSEIN
 */

const express = require("express");
const { spawn } = require("child_process");
const app = express();

app.get("/", (req, res) => {
        res.send("🐐 GOAT BOT V2 — ALWAYS RUNNING\nAuthor: SABBIR HOSSEIN\nStatus: Ultra Stable");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
        console.log(`✅ SERVER RUNNING ON PORT: ${PORT}`);
});

let botProcess;

function startProject() {
        const child = spawn("node", ["Goat.js"], {
                cwd: __dirname,
                stdio: "inherit",
                shell: true
        });

        child.on("close", (code) => {
                if (code == 2) {
                        log.info("Restarting Project...");
                        startProject();
                }
        });
}

startProject();