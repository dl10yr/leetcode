select email AS Email
from Person
WHERE id IN (
    select id FROM Person
    GROUP BY email
    HAVING COUNT(email) >= 2
)