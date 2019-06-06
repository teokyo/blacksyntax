import React, { Component } from 'react';

class ItemServices extends Component {

    state = {};

    componentDidMount() {
        this.setState({ ...(this.props.valores) });
    }

    render() {
        return (
            <div>
                <div class="owl-item services_item">
						<div class="services_item_inner">
							<div class="service_item_content">
								<div class="service_item_title">
									<div class="service_item_icon">
										<div data-icon="&#xe083;" class="icon"></div>
									</div>
									<h2>{this.state.Titulo}</h2>
								</div>
								<p>{this.state.parrafo}</p>
								<div class="button service_item_button trans_200">
									<a href="#" class="trans_200">{this.state.boton}</a>
								</div>
							</div>
						</div>
					</div>

            </div>

        );
    }
}

export default ItemServices;