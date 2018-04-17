FROM docker.elastic.co/kibana/kibana:6.2.3

# Remove the pre-bundled X-Pack plug-in
RUN /usr/share/kibana/bin/kibana-plugin remove x-pack

# Overwrite the default configuration
COPY kibana.yml /usr/share/kibana/config/
