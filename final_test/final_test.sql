-- 1
SELECT p.* FROM t_policy p 
JOIN t_client c ON p.client_number = c.client_number
WHERE p.policy_submit_date > TO_DATE('2018-01-15', 'YYYY-MM-DD') 
AND EXTRACT(MONTH FROM c.birth_date) = 9;
/

-- 2
SELECT p.* FROM t_policy p 
JOIN t_agent a ON p.agent_code = a.agent_code
WHERE p.policy_status = 'INFORCE' AND a.agent_office = 'JAKARTA';
/

-- 3
UPDATE t_agent
SET basic_commission = (
    SELECT AVG((p.commission / p.premium) * 100)
    FROM t_policy p 
    WHERE p.agent_code = t_agent.agent_code
) WHERE EXISTS (
    SELECT 1 FROM t_policy p2 
    WHERE p2.agent_code = t_agent.agent_code
);
/

-- 4
UPDATE t_policy SET policy_due_date = LAST_DAY(policy_submit_date + 30);
/

-- 5
SELECT 
    a.agent_code,
    a.agent_name,
    p.policy_number,
    p.premium,
    p.discount,
    (p.premium - (p.premium * p.discount / 100)) AS premium_after_discount
FROM t_policy p 
JOIN t_agent a ON p.agent_code = a.agent_code
WHERE (p.premium - (p.premium * p.discount / 100)) < 1000000
ORDER BY premium_after_discount ASC;


