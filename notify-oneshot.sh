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
    kdeconnect-cli -n H4113 --ping-msg "something changed"
    sleep 5
    kdeconnect-cli -n H4113 --ping-msg "something changed man!!!"
done
