FROM openjdk:alpine

RUN apk add --update --no-cache git openssh \
  && rm -rf /var/cache/apk/*

# Set user jenkins to the image
RUN adduser -D -u 1000 -s /bin/sh jenkins \
  && passwd -u jenkins \
  && echo "jenkins:jenkins" | chpasswd \
  && ssh-keygen -A

# Standard SSH port
EXPOSE 22

# Install docker client
RUN apk add --no-cache \
		ca-certificates \
		curl \
		openssl \
    && rm -rf /var/cache/apk/*

ENV DOCKER_BUCKET get.docker.com
ENV DOCKER_VERSION 1.12.3
ENV DOCKER_SHA256 626601deb41d9706ac98da23f673af6c0d4631c4d194a677a9a1a07d7219fa0f

RUN set -x \
	&& curl -fSL "https://${DOCKER_BUCKET}/builds/Linux/x86_64/docker-${DOCKER_VERSION}.tgz" -o docker.tgz \
	&& echo "${DOCKER_SHA256} *docker.tgz" | sha256sum -c - \
	&& tar -xzvf docker.tgz \
	&& mv docker/* /usr/local/bin/ \
	&& rmdir docker \
	&& rm docker.tgz \
	&& docker -v

# Default command
CMD ["/usr/sbin/sshd", "-D", "-e"]
