# Workflow: Lead Capture (Draft)

## Purpose
Capture form submissions from the arizona-website booking page, store in a CRM, and send notification email. This is a planned workflow — not yet implemented.

## Node Structure (Planned)
```
[Webhook Trigger] → [Data Validation] → [CRM Create/Update] → [Email Notification] → [Response to Client]

Planned nodes:
1. Webhook — Receive booking form POST from arizona-website
2. Code/Function — Validate and transform data (zod schema)
3. HubSpot/CRM Node — Create contact + deal
4. Gmail/SMTP Node — Send notification to admin
5. Respond-to-Webhook Node — Return success/error to client
```

## API Dependencies (Planned)
| Dependency | Purpose | Status |
|------------|---------|--------|
| n8n Webhook | Receive form data | Not configured |
| HubSpot API | CRM integration | Needs credentials |
| Gmail API | Email notifications | Needs credentials |
| Zod (in Code node) | Input validation | Available |

## Edge Cases
- **Duplicate submissions**: Check for existing contact before creating
- **Invalid data**: Return validation error to client with field-level messages
- **Rate limiting**: HubSpot/Gmail APIs may throttle — add retry logic
- **Network failure**: Add error workflow for notification retry
- **Timezone handling**: Booking dates may need timezone conversion

## Improvements
- [ ] Add Slack notification for high-value leads
- [ ] Add SMS fallback if email fails
- [ ] Add lead scoring based on service type
- [ ] Store lead in both CRM and local database for redundancy

## Usage Guide
1. Create credentials in n8n for HubSpot and Gmail
2. Import workflow template from `knowledge/templates/n8n-lead-capture.json`
3. Configure webhook URL in arizona-website booking form
4. Test with sample submission
5. Activate workflow
6. Monitor execution logs for errors
