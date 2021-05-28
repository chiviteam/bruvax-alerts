# #!/bin/bash
#
while true
do
    npm run oneshot
    git add -A
    timestamp=$(date -u)
    git commit -m "Oneshot: ${timestamp}" || continue
    echo "soemthing changed"
    kdeconnect-cli -d $(kdeconnect-cli -a --id-only)  --ping-msg "something changed"
    git reset --hard
    sleep 10
done
