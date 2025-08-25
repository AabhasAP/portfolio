import express from "express";

const router = express.Router();

router.get("/compliance-status", (req, res) => {
  res.json({
    overallStatus: 87,
    controlsChecked: 142,
    frameworks: [
      { name: "NIST CSF", compliance: 90 },
      { name: "ISO 27001", compliance: 85 },
      { name: "SOC 2", compliance: 88 },
      { name: "PCI DSS", compliance: 80 }
    ],
    recentFindings: [
      { control: "IAM Policy Review", status: "PASSED", description: "All IAM roles have least privilege." },
      { control: "S3 Bucket Encryption", status: "FAILED", description: "1 bucket without encryption." },
      { control: "CloudTrail Enabled", status: "PASSED", description: "CloudTrail logging enabled in all regions." }
    ]
  });
});

router.post("/run-scan", (req, res) => {
  res.json({ status: "Scan completed successfully" });
});

export default router;
