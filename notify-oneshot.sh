# #!/bin/bash
#
while true
do
    npm run oneshot
    git add -A
    timestamp=$(date -u)
    echo "$timestamp"
    git commit -m "Oneshot: ${timestamp}" || continue
    echo "something changed"
    kdeconnect-cli -d $(kdeconnect-cli -a --id-only)  --ping-msg "something changed"
    sleep 5
    kdeconnect-cli -d $(kdeconnect-cli -a --id-only)  --ping-msg "something changed man!!!"
done
